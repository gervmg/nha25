
$(document).ready(function(){

   $("button#start").click(function(){
     $("img").attr("src", "images/start.jpg");
     $(".container").css("background-color", "lightblue");
     $(".container").css("color", "black");
     $("p#page1").removeClass("hide-Page");
     $("p#page2").addClass("hide-Page");
     $("p#page3").addClass("hide-Page");
     $("p#page4").addClass("hide-Page");
     $("p#page5").addClass("hide-Page");
     });
   $("button#web").click(function(){
      $("img").attr("src", "images/webdesign.jpg");
      $(".container").css("background-color", "darkolivegreen");
      $(".container").css("color", "white");
      $("p#page1").addClass("hide-Page");
      $("p#page2").removeClass("hide-Page");
      $("p#page3").addClass("hide-Page");
      $("p#page4").addClass("hide-Page");
      $("p#page5").addClass("hide-Page");
      });
    $("button#python").click(function(){
      $("img").attr("src", "images/python.jpg");
      $(".container").css("background-color", "royalblue");
      $(".container").css("color", "white");
      $("p#page1").addClass("hide-Page");
      $("p#page2").addClass("hide-Page");
      $("p#page3").removeClass("hide-Page");
      $("p#page4").addClass("hide-Page");
      $("p#page5").addClass("hide-Page");
      });
     $("button#django").click(function(){
        $("img").attr("src", "images/django.jpg");
        $(".container").css("background-color", "khaki");
        $(".container").css("color", "black");
        $("p#page1").addClass("hide-Page");
        $("p#page2").addClass("hide-Page");
        $("p#page3").addClass("hide-Page");
        $("p#page4").removeClass("hide-Page");
        $("p#page5").addClass("hide-Page");
        });
    $("button#scrum").click(function(){
          $("img").attr("src", "images/scrum.jpg");
          $(".container").css("background-color", "indigo");
          $(".container").css("color", "white");
          $("p#page1").addClass("hide-Page");
          $("p#page2").addClass("hide-Page");
          $("p#page3").addClass("hide-Page");
          $("p#page4").addClass("hide-Page");
          $("p#page5").removeClass("hide-Page");
          });

     $("button").hover(function(){
        $(this).css({"background-color":"tomato", "color":"white", "border-color":"black" });
        }, function(){
        $(this).css({"background-color":"lightgray", "color":"black", "border-color":"steelblue"});
      });

});
