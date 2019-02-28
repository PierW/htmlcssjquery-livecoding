// RISOLVO CON Jquery

$("#container").mouseenter(function() {
  $("h1").css("display", "block");
});
$("#container").mouseleave(function() {
  $("h1").css("display", "none");
});


// RISOLOVO CON JQUERY (2° METODO)

$("#container").on({
  mouseenter : function() {
    $("h1").css("display", "block");
  },
  mouseleave : function() {
    $("h1").css("display", "none");
  }
});


// RISOLOVO CON JQUERY (3° METODO)

$("#container").hover(
  function() {
    $("h1").css("display", "block");
  },
  function() {
    $("h1").css("display", "none");
  });


// RISOLVO CON Javascript
var element = document.getElementById("container");
var h1 = element.getElementsByTagName("h1")[0];

element.addEventListener("mouseenter", function() {
  h1.style.display = "block";
});

element.addEventListener("mouseleave", function() {
  h1.style.display = "none";
});
