$(".dark-btn").click(function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  });

  $(".glow-btn").click(function(){
    $(".box").toggleClass("glow");
  });
  
  $(".spin-btn").click(function(){
    $(".box").toggleClass("spin");
  });

//   $(".reveal-btn").click(function(){
//     $(".chair").css('opacity','1');
//   });
// //   way to frame it so the condition is incorporated into the jquery

$(".reveal-btn").click(function(){
    $(".chair").css({
        "opacity":"1",
        "border":"1 px solid"
  });
  $(".reveal-btn").hide();
});


