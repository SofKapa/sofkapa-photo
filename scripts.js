// A $( document ).ready() block.
$( document ).ready(function() {
    



    // HAMBURGER MENU 
    // Toggle burger
    $('.burger-button').click(function () {
      $('.burger-button').toggleClass('active');
      $('.burger-menu').toggleClass('active');
    });

    // Toggle dropdown on title click
    $('.dropdown-title').on('click', function (e) {
      e.stopPropagation(); // Stop the event from bubbling up to document
      $(this).parent().toggleClass('open');
    });

    // === CLOSE DROPDOWN ON OUTSIDE CLICK ===
    $(document).on('click', function () {
      $('.dropdown').removeClass('open');
    });




    // SLICK SLIDER - HOMEPAGE CARDS
    $('.slider-homepage').slick({
        autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed: 1000, // How long between each slide when auto-playing
        speed: 1500, // How fast is the transition in milliseconds
        arrows: false, // Do you want to show arrows to trigger each slide
        accessibility: false, // Enables keyboard tabbing and arrow key navigation
        dots: false, // Enables the dots below to show how many slides
        fade: true, // Changes the animate from slide to fade if true
        infinite: true, // When true, means that it will scroll in a circle
        pauseOnHover: true, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
    });




    
    // HOMEPAGE TOGGLE - REVEAL HIDDEN PARAGRAPHS
    $('.toggle-button').on('click', function () {
      const $button = $(this);
      const $container = $button.closest('#home-toggle');
      const $content = $container.find('.extra-paragraphs');
      const $arrow = $button.find('.toggle-arrow');
      const $text = $button.find('.toggle-instruction');

      const isOpen = $content.hasClass('open');

      if (isOpen) {
        // Close: collapse content
        $content.removeClass('open').css({
          maxHeight: '0px',
          opacity: '0',
          overflow: 'hidden'
        });
      } else {
        // Open: expand to full scrollHeight
        $content.addClass('open').css({
          maxHeight: 'none' // temporarily remove limit
        });

        const scrollHeight = $content[0].scrollHeight + 'px';

        // Reset, then reflow, then animate
        $content
          .css('maxHeight', '0px'); // reset first
        $content[0].offsetHeight; // force reflow
        $content
          .css({
            maxHeight: scrollHeight,
            opacity: '1',
            overflow: 'visible'
          });
      }

      // Toggle arrow rotation
      $arrow.toggleClass('rotated', !isOpen);

      // Change text
      const openText = $button.data('open-text');
      const closedText = $button.data('closed-text');
      $text.text(isOpen ? closedText : openText);
    });






    // SCROLL FOR GALLERIES ON DESKTOP WITH MOUSE
    setTimeout(function () {
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const $container = $('.scrolling-gallery__container');
        if (!$container.length) return;

        const containerEl = $container[0];

        // Use passive: false only if necessary
        containerEl.addEventListener('wheel', function (e) {
          // Skip if modifier keys (prevent accidental interference)
          if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;

          // Avoid using preventDefault to protect custom cursor
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            containerEl.scrollBy({
              left: e.deltaY,
              behavior: 'smooth'
            });
          }
        });

        // Optional: Scroll buttons
        $('.scroll-left').on('click', function () {
          containerEl.scrollBy({ left: -400, behavior: 'smooth' });
        });

        $('.scroll-right').on('click', function () {
          containerEl.scrollBy({ left: 400, behavior: 'smooth' });
        });
      }
    }, 100); // Delay slightly to avoid cursor conflicts

    function positionScrollButtons() {
      const container = document.querySelector('.scrolling-gallery__container');
      const buttons = document.querySelector('.scroll-buttons-desktop');

      if (container && buttons) {
        const containerRect = container.getBoundingClientRect();
        const containerHeight = containerRect.height;

        // Align buttons to middle of scroll container
        buttons.style.top = `${container.offsetTop + containerHeight / 2}px`;
        buttons.style.transform = 'translateY(-50%)';
      }
    }

    // Call on load and on resize
    window.addEventListener('load', positionScrollButtons);
    window.addEventListener('resize', positionScrollButtons);




    


    // STEPS OF THE PROCESS APPEARING FROM LEFT AND RIGHT
    // Select all .step elements
    const steps = document.querySelectorAll('.step');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    steps.forEach(step => {
        observer.observe(step);
    });





    // ANIMATE ON SCROLL - ACTIVATE
    AOS.init();





    // POP-UP GALLERY

    lightGallery(document.getElementById('lightgallery'), {
      speed: 500,
      download: false,
      counter: false,
      mobileSettings: {
        showCloseIcon: true,
      }
    });

    // When gallery opens, add class
    document.addEventListener('lgAfterOpen', () => {
      document.body.classList.add('lg-open');
    });

    // When gallery closes, remove class
    document.addEventListener('lgAfterClose', () => {
      document.body.classList.remove('lg-open');
    });



    

      // SLICK SLIDER - ABOUT IMAGES
    $('.slider-container').slick({
        autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed: 2000, // How long between each slide when auto-playing
        speed: 1500, // How fast is the transition in milliseconds
        arrows: false, // Do you want to show arrows to trigger each slide
        accessibility: false, // Enables keyboard tabbing and arrow key navigation
        dots: true, // Enables the dots below to show how many slides
        fade: true, // Changes the animate from slide to fade if true
        infinite: true, // When true, means that it will scroll in a circle
        pauseOnHover: true, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
    });  




    // SLICK SLIDER - TESTIMONIALS
    $('.testimonial-slider-container').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: true,
        dots: false,
        fade: false,
        infinite: true,
        pauseOnHover: true,
        prevArrow: '<button type="button" class="custom-prev slick-arrow" aria-label="Previous"></button>',
        nextArrow: '<button type="button" class="custom-next slick-arrow" aria-label="Next"></button>',
    });





    // TYPING ANIMATION
    // Function to start Typed animation
    function startTyped() {
      new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        startDelay: 500,
        backSpeed: 10,
        backDelay: 1000,
        smartBackspace: true,
        shuffle: false,
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        loop: false,
        loopCount: Infinity,
        showCursor: false
      });
    }

    // Use Intersection Observer
    const typedTarget = document.querySelector('#typed');

    if (typedTarget) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startTyped(); // Start the animation
            observer.unobserve(entry.target); // Stop observing so it doesn’t retrigger
          }
        });
      }, { threshold: 0.5 }); // Adjust threshold as needed

      observer.observe(typedTarget);
    }





    // CURSOR SCRIPTS
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('pointermove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, input, textarea, .hover-target, .burger-button').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    // Touch device check
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add('no-cursor');
    }



    

    // OVERRIDE FORMSPREE REDIRECT PAGE
    $('#price-guide-form').on('submit', function (e) {
      e.preventDefault(); // Stop default form submission

      const form = this;
      const formData = $(form).serialize();

      $.ajax({
        url: form.action,
        method: form.method,
        data: formData,
        dataType: "json",
        success: function () {
          window.location.href = "/thank-you.html"; // Change this if needed
        },
        error: function () {
          alert("Oops! There was a problem submitting the form.");
        }
      });

    });



    // COOKIE BANNER ANIMATION
    function createCookie(name, value, days) {
      let expires = "";
      if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    function eraseCookie(name) {
      createCookie(name, "", -1);
    }

    function runCookiedCodes() {
      // Only run your tracking scripts if approved
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-9M78DLKD8V');
    }

    const $cookieNotice = $('#cookie-notice');

    if (readCookie('cookie-notice-dismissed') === 'true') {
      $cookieNotice.remove(); // 💥 fully removes it from the DOM
      runCookiedCodes();
    } else {
      setTimeout(() => {
        $cookieNotice.addClass('show').show();
      }, 3000);
    }

    $('#cookie-notice-accept').on('click', function () {
      createCookie('cookie-notice-dismissed', 'true', 31);
      $cookieNotice.remove(); // 🔁 change from .hide() to .remove()
      runCookiedCodes();
    });

    $('#cookie-notice-decline').on('click', function () {
      createCookie('cookie-notice-dismissed', 'true', 31);
      $cookieNotice.remove(); // 🔁 ensures it never reappears
    });


});