<?php
// form-c7.php — Contact / Enquiry form handler
// Accepts POST (application/x-www-form-urlencoded from jQuery serialize())
// Returns JSON: {"success": true} or {"success": false, "error": "..."}

header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/includes/db.php';

// ── Sanitise & validate ──────────────────────────────────────────────────────
function clean(string $val): string {
    return trim(strip_tags($val));
}

$name    = clean($_POST['name']    ?? '');
$email   = clean($_POST['email']   ?? '');
$company = clean($_POST['company'] ?? '');
$phone   = clean($_POST['phone']   ?? '');
$product = clean($_POST['product'] ?? '');
$message = clean($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Required fields missing']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

// Basic spam honeypot (add <input type="text" name="website" style="display:none"> to form)
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true]); // silently discard
    exit;
}

$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? null;

// ── Save to database ─────────────────────────────────────────────────────────
try {
    $pdo = get_pdo();
    $stmt = $pdo->prepare(
        'INSERT INTO enquiries (name, email, company, phone, product, message, ip)
         VALUES (:name, :email, :company, :phone, :product, :message, :ip)'
    );
    $stmt->execute([
        ':name'    => $name,
        ':email'   => $email,
        ':company' => $company ?: null,
        ':phone'   => $phone   ?: null,
        ':product' => $product ?: null,
        ':message' => $message,
        ':ip'      => $ip,
    ]);
} catch (PDOException $e) {
    // Log error but don't expose details
    error_log('Enquiry DB error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database error']);
    exit;
}

// ── Send email via PHPMailer ─────────────────────────────────────────────────
// PHPMailer files must be placed in includes/PHPMailer/src/
// Download from: https://github.com/PHPMailer/PHPMailer/releases
$phpmailerPath = __DIR__ . '/includes/PHPMailer/src/';

if (is_dir($phpmailerPath)) {
    require_once $phpmailerPath . 'PHPMailer.php';
    require_once $phpmailerPath . 'SMTP.php';
    require_once $phpmailerPath . 'Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    try {
        $mail = new PHPMailer(true);

        // SMTP settings — configure via cPanel Email Accounts
        $mail->isSMTP();
        $mail->Host       = 'mail.kalparuchi.com'; // your cPanel mail server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@kalparuchi.com';
        $mail->Password   = 'SMTP_PASSWORD_HERE';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('info@kalparuchi.com', 'Kalpa Ruchi Website');
        $mail->addAddress('info@kalparuchi.com', 'Kalpa Ruchi Enquiries');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = 'New Enquiry from ' . $name . ($product ? ' — ' . $product : '');
        $mail->Body    = nl2br("
<h2 style='font-family:Georgia,serif;color:#1a4731;'>New Enquiry — Kalpa Ruchi</h2>
<table cellpadding='8' style='border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;'>
  <tr><td style='color:#6b7280;width:140px;'>Name</td><td><strong>" . htmlspecialchars($name) . "</strong></td></tr>
  <tr style='background:#f9f9f9;'><td style='color:#6b7280;'>Email</td><td>" . htmlspecialchars($email) . "</td></tr>
  <tr><td style='color:#6b7280;'>Company</td><td>" . htmlspecialchars($company ?: '—') . "</td></tr>
  <tr style='background:#f9f9f9;'><td style='color:#6b7280;'>Phone</td><td>" . htmlspecialchars($phone ?: '—') . "</td></tr>
  <tr><td style='color:#6b7280;'>Product</td><td>" . htmlspecialchars($product ?: '—') . "</td></tr>
  <tr style='background:#f9f9f9;'><td style='color:#6b7280;vertical-align:top;'>Message</td><td>" . nl2br(htmlspecialchars($message)) . "</td></tr>
</table>
        ");
        $mail->AltBody = "Name: $name\nEmail: $email\nCompany: $company\nPhone: $phone\nProduct: $product\n\nMessage:\n$message";

        $mail->send();
    } catch (Exception $e) {
        error_log('PHPMailer error: ' . $mail->ErrorInfo);
        // Don't fail the response — email is secondary to DB save
    }
}

echo json_encode(['success' => true]);
