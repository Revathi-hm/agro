<?php
// footer.php — shared footer + scripts
// Usage: include 'includes/footer.php';
$root = $root ?? '';
?>

<!-- ── Footer ── -->
<footer class="footer">
  <div class="container">
    <div class="row footer-top">
      <!-- Brand -->
      <div class="col-lg-4 mb-5 mb-lg-0">
        <div class="footer-brand">
          <div class="d-flex align-items-center mb-3">
            <img src="<?= $root ?>images/logo.jpeg" alt="Kalpa Ruchi" class="mr-2">
            <div class="ml-2">
              <span class="logo-name d-block">Kalpa Ruchi</span>
              <span class="logo-sub d-block">Dhanalakshmi Agro Products</span>
            </div>
          </div>
          <p>Premium coconut-derived products crafted with purity and precision since 2007. From grove to global markets — naturally.</p>
          <div class="mt-3">
            <a href="#" class="social-btn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" class="social-btn" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="#" class="social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="social-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="col-6 col-lg-2 mb-5 mb-lg-0 footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="<?= $root ?>about.html">About Us</a></li>
          <li><a href="<?= $root ?>classes.html">Products</a></li>
          <li><a href="<?= $root ?>index.html#process">Our Process</a></li>
          <li><a href="<?= $root ?>index.html#why-us">Why Us</a></li>
          <li><a href="<?= $root ?>contact.html">Contact</a></li>
        </ul>
      </div>

      <!-- Products -->
      <div class="col-6 col-lg-3 mb-5 mb-lg-0 footer-col">
        <h5>Our Products</h5>
        <ul>
          <li><a href="<?= $root ?>desiccated-coconut-powder.html">Desiccated Coconut Powder</a></li>
          <li><a href="<?= $root ?>desiccated-coconut-flakes.html">Desiccated Coconut Flakes</a></li>
          <li><a href="<?= $root ?>virgin-coconut-oil.html">Virgin Coconut Oil</a></li>
          <li><a href="<?= $root ?>coconut-milk.html">Coconut Milk</a></li>
          <li><a href="<?= $root ?>d-fat-coconut-powder.html">D-Fat Coconut Powder</a></li>
          <li><a href="<?= $root ?>coconut-milk-powder.html">Coconut Milk Powder</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="col-lg-3 footer-col">
        <h5>Stay Updated</h5>
        <p style="font-size:.875rem;color:rgba(255,255,255,.45);margin-bottom:1.25rem;line-height:1.6;">
          Subscribe for product updates, certifications, and export news.
        </p>
        <form class="newsletter-form" action="form_nl.php" method="POST">
          <input type="email" name="email" placeholder="Your email" required>
          <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
        </form>
        <p class="newsletter-note">No spam — unsubscribe anytime.</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© <?= date('Y') ?> <a href="<?= $root ?>index.html">Kalpa Ruchi</a> · Dhanalakshmi Agro Products. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>

<!-- jQuery + Popper + Bootstrap 4 JS -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"></script>
<!-- Custom JS -->
<script src="<?= $root ?>js/main.js"></script>
</body>
</html>
