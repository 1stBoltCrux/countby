$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();
    var number1 = parseInt($("input#countTo").val());
    var number2 = parseInt($("input#countBy").val());
    if (number1 < 0 || number1 < number2){
      alert("Please enter a number to count to that is greater than zero and also a number to count by that is less than the number you're counting to!");
    } else {
      for(var number3 = number2; number3 <= number1; number3 += number2){
      $("ul").append("<li>" + number3 + "</li>");
      }
    }
  });
});
