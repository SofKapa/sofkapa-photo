// A $( document ).ready() block.
$( document ).ready(function() {
    

    // HAMBURGER MENU 
    // If you click on element with 'burger-button' class... 

    $('.burger-button').click(function(){
  
        // ...the element with the class of 'burger-button' (in this case our div containing the links) will slide toggle:
        $(".burger-button").toggleClass("active");
    
        // ...the hamburger element itself:
        $(".burger-menu").toggleClass("active");

    });


    // ANIMATE ON SCROLL - ACTIVATE
    AOS.init();



    // POP-UP GALLERY
    lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        download: false
    });


    // SLICK SLIDER - HOMEPAGE CARDS
    $('.slider-container-homepage-cards').slick({
        autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed: 2000, // How long between each slide when auto-playing
        speed: 1500, // How fast is the transition in milliseconds
        arrows: false, // Do you want to show arrows to trigger each slide
        accessibility: false, // Enables keyboard tabbing and arrow key navigation
        dots: false, // Enables the dots below to show how many slides
        fade: true, // Changes the animate from slide to fade if true
        infinite: true, // When true, means that it will scroll in a circle
        pauseOnHover: true, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
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
        autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed:5000, // How long between each slide when auto-playing
        speed: 500, // How fast is the transition in milliseconds
        arrows: false, // Do you want to show arrows to trigger each slide
        accessibility: true, // Enables keyboard tabbing and arrow key navigation
        dots: false, // Enables the dots below to show how many slides
        fade: false, // Changes the animate from slide to fade if true
        infinite: true, // When true, means that it will scroll in a circle
        pauseOnHover: true, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
    });


    // TYPING ANIMATION
    // var typed = new Typed('#typed', {
    //   stringsElement: '#typed-strings',
    //   typeSpeed: 50, // How fast each character being typed in milliseconds
    //   startDelay: 500, // How long the string (the series of characters) inside a single element tag (for example the paragraph <p> tag) should wait before it starts typing the string inside the next element tag
    //   backSpeed: 10, // How fast each character should be removed after it’s done typing
    //   backDelay: 1000, // After it’s done typing, how long it should wait before it starts backspacing
    //   smartBackspace: true, // Only backspace the characters in the current string that don't match the previous element.
    //   shuffle: false, // To shuffle the order of the strings
    //   fadeOut: false, // To make the string fades out instead of backspace
    //   fadeOutClass: 'typed-fade-out', // Required to add a CSS class for the fade animation
    //   fadeOutDelay: 500, // After the string is done typing, how long it should wait before it starts fading out
    //   loop: false, // Do we want it to repeat after being done typing all the strings
    //   loopCount: Infinity, // If loop is active (true), then how many times we want it to repeat. You can add any number or simply add Infinity to repeat endlessly.
    //   showCursor: false // To show or hide the cursor animation
    // });

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

    document.addEventListener('mousemove', e => {
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


    // HOMEPAGE TOGGLE - REVEAL HIDDEN PARAGRAPHS
    $('.toggle-button').on('click', function () {
      const $button = $(this);
      const $container = $button.closest('.padded-tb-2');
      const $content = $container.find('.extra-paragraphs');
      const $arrows = $container.find('.arrow');

      const isOpen = $content.hasClass('open');

      // Toggle visibility with CSS transitions
      $content.toggleClass('open');

      // Toggle arrow rotation
      $arrows.toggleClass('rotated', !isOpen);
    });

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


});


