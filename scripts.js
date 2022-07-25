// A $( document ).ready() block.
$( document ).ready(function() {
    

// If you click on element with 'hamburger-button' class ...
// ...the element with the class of 'mobile-menu' (in this case our div containing the links) will fade toggle: 
// ...the hamburger element itself:

    $('.hamburger-button').click(function(){
    
        $(this).toggleClass('active'); 
        $('.mobile-menu').slideToggle(); 
        
    });



});


