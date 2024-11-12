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


    // INITIALIZE SLICK SLIDER GALLERY & TESTIMONIAL
    $('.slider-container').slick({
        autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed: 2000, // How long between each slide when auto-playing
        speed: 500, // How fast is the transition in milliseconds
        arrows: false, // Do you want to show arrows to trigger each slide
        accessibility: true, // Enables keyboard tabbing and arrow key navigation
        dots: true, // Enables the dots below to show how many slides
        fade: false, // Changes the animate from slide to fade if true
        infinite: false, // When true, means that it will scroll in a circle
        pauseOnHover: false, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
    });

});


