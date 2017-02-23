$(document).ready(function() {

  $(".page-header i").click(function() {
    $(".top-nav ul").slideToggle(250, function() {
      console.log('slick');
    });
  })

});
