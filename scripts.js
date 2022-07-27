// A $( document ).ready() block.
$( document ).ready(function() {
    

    // HAMBURGER MENU 
    // If you click on element with 'hamburger-button' class (in this case 'MENU')... 

    $('.hamburger-button').click(function(){
  
        // ...the element with the class of 'mobile-menu' (in this case our div containing the links) will fade toggle:
        $('.mobile-menu').slideToggle(); 
    
        // ...the hamburger element itself:
        $(this).toggleClass('active'); 

    });


    // ANIMATE ON SCROLL - ACTIVATE
    AOS.init();



    // POP-UP GALLERY
    lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        download: false
    });


});


