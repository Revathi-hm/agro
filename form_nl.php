<?php
// form_nl.php — Newsletter subscription handler
// Accepts POST: email
// Returns JSON: {"success": true} or {"success": false}

header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

require_once __DIR__ . '/includes/db.php';

$email = trim(strip_tags($_POST['email'] ?? ''));

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Invalid email']);
    exit;
}

try {
    $pdo  = get_pdo();
    $stmt = $pdo->prepare(
        'INSERT IGNORE INTO newsletter (email) VALUES (:email)'
    );
    $stmt->execute([':email' => $email]);
} catch (PDOException $e) {
    error_log('Newsletter DB error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false]);
    exit;
}

// Optional: send confirmation email via PHPMailer
$phpmailerPath = __DIR__ . '/includes/PHPMailer/src/';
if (is_dir($phpmailerPath)) {
    require_once $phpmailerPath . 'PHPMailer.php';
    require_once $phpmailerPath . 'SMTP.php';
    require_once $phpmailerPath . 'Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = 'mail.kalparuchi.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@kalparuchi.com';
        $mail->Password   = 'SMTP_PASSWORD_HERE';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('info@kalparuchi.com', 'Kalpa Ruchi');
        $mail->addAddress($email);
        $mail->Subject = 'Welcome to Kalpa Ruchi Updates!';
        $mail->isHTML(true);
        $mail->Body = '
<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#0a1f12;">
  <div style="background:#1a4731;padding:32px;text-align:center;border-radius:12px 12px 0 0;">
    <h1 style="font-family:Georgia,serif;color:#c9a84c;margin:0;font-size:2rem;">Kalpa Ruchi</h1>
    <p style="color:rgba(255,255,255,.7);margin:6px 0 0;font-size:.85rem;">Dhanalakshmi Agro Products</p>
  </div>
  <div style="background:#faf7f2;padding:32px;border-radius:0 0 12px 12px;">
    <h2 style="font-family:Georgia,serif;font-size:1.5rem;margin-bottom:1rem;">You\'re subscribed!</h2>
    <p style="color:#6b7280;line-height:1.75;">
      Thank you for subscribing to Kalpa Ruchi updates. We\'ll keep you informed about
      new products, certifications, and export news.
    </p>
    <p style="color:#6b7280;line-height:1.75;margin-top:1rem;">
      Visit <a href="https://kalparuchi.com" style="color:#1a4731;font-weight:600;">kalparuchi.com</a>
      to explore our premium coconut products.
    </p>
  </div>
</div>';

        $mail->send();
    } catch (Exception $e) {
        error_log('Newsletter email error: ' . $e->getMessage());
    }
}

echo json_encode(['success' => true]);
