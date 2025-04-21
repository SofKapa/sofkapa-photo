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
        autoplaySpeed:3000, // How long between each slide when auto-playing
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


    // Cursor scripts ------------------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
    // Select the custom cursor element
        const cursor = document.querySelector(".custom-cursor");
    });

    // Update cursor position
    document.addEventListener("mousemove", (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    });

    // Add event listeners for expanding the cursor on interactive elements
    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("expand"));
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("expand")
      );
    });


    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {});

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  //End cursor scripts-------------------------------------------------------------------------

});


