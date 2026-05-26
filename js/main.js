$(function () {

  /* ── Navbar scroll behaviour ── */
  var $nav = $('.navbar-kr');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 60) {
      $nav.addClass('scrolled').removeClass('navbar-transparent');
    } else {
      $nav.removeClass('scrolled').addClass('navbar-transparent');
    }
  });
  // Trigger once on load
  if ($(window).scrollTop() <= 60) $nav.addClass('navbar-transparent');

  /* ── Smooth scroll for anchor links ── */
  $(document).on('click', 'a[href^="#"]', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 80 }, 700);
      // Close mobile nav if open
      $('#navbarNav').collapse('hide');
    }
  });

  /* ── Scroll reveal ── */
  function revealOnScroll() {
    $('.reveal').each(function () {
      var elemTop = $(this).offset().top;
      var viewBottom = $(window).scrollTop() + $(window).height() * 0.88;
      if (elemTop < viewBottom) $(this).addClass('visible');
    });
  }
  $(window).on('scroll', revealOnScroll);
  revealOnScroll();

  /* ── Animated counters ── */
  var counterDone = false;
  function runCounters() {
    if (counterDone) return;
    var statsTop = $('.stats').offset().top;
    if ($(window).scrollTop() + $(window).height() > statsTop + 100) {
      counterDone = true;
      $('.stat-number[data-target]').each(function () {
        var $el = $(this);
        var target = parseInt($el.data('target'), 10);
        var suffix = $el.data('suffix') || '';
        var duration = 1800;
        var step = target / (duration / 16);
        var current = 0;
        var timer = setInterval(function () {
          current += step;
          if (current >= target) {
            $el.text(target + suffix);
            clearInterval(timer);
          } else {
            $el.text(Math.floor(current) + suffix);
          }
        }, 16);
      });
    }
  }
  $(window).on('scroll', runCounters);
  runCounters();

  /* ── Product modal ── */
  $(document).on('click', '.product-card[data-modal]', function () {
    var id = $(this).data('modal');
    $('#modal-' + id).addClass('active');
    $('body').addClass('modal-open-kr');
  });
  $(document).on('click', '.modal-overlay', function (e) {
    if ($(e.target).hasClass('modal-overlay') || $(e.target).hasClass('modal-close')) {
      $('.modal-overlay').removeClass('active');
      $('body').removeClass('modal-open-kr');
    }
  });
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('.modal-overlay').removeClass('active');
      $('body').removeClass('modal-open-kr');
    }
  });

  /* ── Contact form (AJAX) ── */
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();
    var $btn = $(this).find('[type="submit"]');
    var $success = $('#form-success');
    var $error   = $('#form-error');
    $success.removeClass('show');
    $error.removeClass('show');
    $btn.prop('disabled', true).html('<i class="fa-solid fa-spinner fa-spin"></i> Sending…');

    $.ajax({
      url: 'form-c7.php',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      success: function (res) {
        if (res.success) {
          $success.addClass('show');
          $('#contact-form')[0].reset();
        } else {
          $error.addClass('show');
        }
      },
      error: function () { $error.addClass('show'); },
      complete: function () {
        $btn.prop('disabled', false).html('<i class="fa-solid fa-paper-plane"></i> Send Enquiry');
      }
    });
  });

  /* ── Newsletter form (AJAX) ── */
  $('.newsletter-form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    var email = $form.find('input[type="email"]').val();
    $.ajax({
      url: 'form_nl.php',
      method: 'POST',
      data: { email: email },
      dataType: 'json',
      success: function (res) {
        if (res.success) {
          $form.replaceWith('<p class="text-success small"><i class="fa-solid fa-circle-check"></i> Thank you for subscribing!</p>');
        }
      }
    });
  });

  /* ── Marquee pause on hover ── */
  $('.marquee-track').on('mouseenter', function () {
    $(this).css('animation-play-state', 'paused');
  }).on('mouseleave', function () {
    $(this).css('animation-play-state', 'running');
  });

  /* ── Product filter (classes.html) ── */
  $(document).on('click', '.filter-btn', function () {
    var filter = $(this).data('filter');
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    if (filter === 'all') {
      $('.product-card-wrap').show();
    } else {
      $('.product-card-wrap').hide().filter('[data-category="' + filter + '"]').show();
    }
  });

  /* ── Fade-in hero elements on load ── */
  $('.hero-badge, .hero-title, .hero-subtitle, .hero-cta').each(function (i) {
    var $el = $(this);
    setTimeout(function () { $el.addClass('visible'); }, 400 + i * 150);
  });

});
