// $(document).ready(function(){
//     $("#homeBtn").click(function() {
//         $('html,body').animate({                                                          //  fine in moz, still quicker in chrome. 
//             scrollTop: $("#home").offset().top},
//             'slow');
//     });
//      });

var section = $("section")


$(".show-menu").click(function(){
    section.removeClass("display-show").addClass("display-hide");
    const elementId = $(this).attr('data-id');
    $("#"+elementId).removeClass("display-hide").addClass("display-show");
})


$('.carousel').carousel({
    interval: 2000
})

$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-minus fa-plus");
});


var chapter = $(".single-chapter")

$(".show-chapter").click(function(){
  chapter.removeClass("display-show").addClass("display-hide");
  const elementId = $(this).attr('data-id');
  $("#"+elementId).removeClass("display-hide").addClass("display-show");
})