<?php
// header.php — shared <head> + navbar
// Usage: include 'includes/header.php';
// Required before include: $page_title, $page_description, $active_page
$page_title       = $page_title       ?? 'Kalpa Ruchi | Premium Coconut Products';
$page_description = $page_description ?? 'Premium coconut-derived products by Dhanalakshmi Agro Products. Pure, natural, and sustainably sourced since 2007.';
$active_page      = $active_page      ?? 'home';

// Root-relative path prefix (set to '' if file is in root, '../' if one level deep)
$root = $root ?? '';
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?= htmlspecialchars($page_description) ?>">
  <title><?= htmlspecialchars($page_title) ?></title>
  <link rel="icon" type="image/svg+xml" href="<?= $root ?>public/favicon.svg">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" rel="stylesheet">

  <!-- Bootstrap 4 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <!-- Font Awesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <!-- Custom styles -->
  <link rel="stylesheet" href="<?= $root ?>css/style.css">
</head>
<body>

<!-- ── Navbar ── -->
<nav class="navbar-kr navbar-transparent" id="mainNav">
  <div class="container">
    <nav class="navbar navbar-expand-lg p-0">
      <a class="navbar-brand d-flex align-items-center gap-2" href="<?= $root ?>index.html">
        <img src="<?= $root ?>images/logo.jpeg" alt="Kalpa Ruchi Logo">
        <div class="brand-text ml-2">
          <span class="brand-name">Kalpa Ruchi</span>
          <span class="brand-sub d-block">Dhanalakshmi Agro Products</span>
        </div>
      </a>

      <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars" style="color:#fff;font-size:1.2rem;"></i>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center">
          <li class="nav-item">
            <a class="nav-link<?= $active_page === 'about'   ? ' font-weight-bold' : '' ?>" href="<?= $root ?>about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link<?= $active_page === 'classes' ? ' font-weight-bold' : '' ?>" href="<?= $root ?>classes.html">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= $active_page === 'home' ? '#process' : $root . 'index.html#process' ?>">Process</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= $active_page === 'home' ? '#why-us' : $root . 'index.html#why-us' ?>">Why Us</a>
          </li>
          <li class="nav-item ml-lg-3">
            <a class="nav-link nav-cta<?= $active_page === 'contact' ? ' font-weight-bold' : '' ?>" href="<?= $root ?>contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</nav>
