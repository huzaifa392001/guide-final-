// $(document).ready(function(){
//     $("#homeBtn").click(function() {
//         $('html,body').animate({                                                          //  fine in moz, still quicker in chrome. 
//             scrollTop: $("#home").offset().top},
//             'slow');
//     });
//      });

var section = $("section")


$(".show-menu").click(function(){
    section.removeClass("show").addClass("hide");
    const elementId = $(this).attr('data-id');
    $("#"+elementId).removeClass("hide").addClass("show");
})

// $(window).scroll(function() {
//     var scroll = $(document).scrollTop() > 200;
//     if (scroll === true) {
//       $("nav").removeClass("fixed-top").css("top" , "-200px");
//     }
//     else {
//       $("nav").addClass("fixed-top").css("top" , "0");
//     }
// });