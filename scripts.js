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


    // SLICK SLIDER - GALLERY
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


    // Cursor scripts ------------------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
    // Select the custom cursor element
        const cursor = document.querySelector(".custom-cursor");

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





    html.lenis,
    html.lenis body {
        height: auto;
    }

    .lenis.lenis-smooth {
        scroll-behavior: auto !important;
    }

    .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
    }

    .lenis.lenis-stopped {
        overflow: hidden;
    }

    .lenis.lenis-smooth iframe {
        pointer-events: none;
    }


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


