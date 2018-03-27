$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();
    var number1 = parseInt($("input#countTo").val());
    var number2 = parseInt($("input#countBy").val());
    for(var number3 = number2; number3 < number1; number3 += number2){
      $("ul").append("<li>" + number3 + "</li>");
    }
  });
});
