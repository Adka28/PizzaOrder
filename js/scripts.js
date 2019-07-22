$(document).ready(function() {
    $("#appForm").submit(function(event) {
        var topping1 = $("input#pizzaTopping1").is(":checked");
        var topping2 = $("input#pizzaTopping2").is(":checked");
        var topping3 = $("input#pizzaTopping3").is(":checked");
        var topping4 = $("input#pizzaTopping4").is(":checked");
        var topping5 = $("input#pizzaTopping5").is(":checked");

        $("#appForm").fadeOut();
        $("#result").fadeIn();
        
        event.preventDefault();
        });
  });