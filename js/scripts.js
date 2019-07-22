$(document).ready(function() {

    var knownToppings = {
        topping1: new Topping("topping1", 1.1),
        topping2: new Topping("topping2", 1.2),
        topping3: new Topping("topping3", 1.3),
        topping4: new Topping("topping4", 1.4),
        topping5: new Topping("topping5", 1.5)
    };

    $("#appForm").submit(function(event) {
        var toppingsSelection = {
            isTopping1: $("input#pizzaTopping1").is(":checked"),
            isTopping2: $("input#pizzaTopping2").is(":checked"),
            isTopping3: $("input#pizzaTopping3").is(":checked"),
            isTopping4: $("input#pizzaTopping4").is(":checked"),
            isTopping5: $("input#pizzaTopping5").is(":checked")
        };

        var size = $("select#pizzaSize").val();

        var pizza = orderPizza(knownToppings, toppingsSelection, size);

        $("#orderToppings").text(pizza.toppingsText());
        $("#orderSize").text(pizza.sizeText());
        $("#orderCost").text(pizza.cost());

        $("#appForm").fadeOut();
        $("#result").fadeIn();
        
        event.preventDefault();
        });
  });

function orderPizza(knownToppings, toppingsSelection, size) {

    var pizza = new Pizza(size);

    if (toppingsSelection.isTopping1) {
        pizza.addTopping(knownToppings.topping1);
    }

    if (toppingsSelection.isTopping2) {
        pizza.addTopping(knownToppings.topping2);
    }

    if (toppingsSelection.isTopping3) {
        pizza.addTopping(knownToppings.topping3);
    }

    if (toppingsSelection.isTopping4) {
        pizza.addTopping(knownToppings.topping4);
    }

    if (toppingsSelection.isTopping5) {
        pizza.addTopping(knownToppings.topping5);
    }

    return pizza;
}

function Pizza(size) {
    this.toppings = [];
    this.size = size;
}

Pizza.prototype.cost = function() {
    var finalCost = 0;
    this.toppings.forEach(topping => finalCost += topping.cost);
    return finalCost;
}

Pizza.prototype.cost = function() {
    var finalCost = 0;
    var toppingsCost = 0;

    this.toppings.forEach(topping => toppingsCost += topping.cost);

    switch (this.size) {
        case "S":
            finalCost = 8 + toppingsCost;
            break;
        case "M":
            finalCost = 12 + toppingsCost;
            break;
        case "L":
            finalCost = 16 + toppingsCost;
            break;
        default:
            finalCost = -1;
    }

    return finalCost;
}

Pizza.prototype.addTopping = function(topping) {
    this.toppings.push(topping)
}

Pizza.prototype.sizeText = function() {
    switch (this.size) {
        case "S":
            return "Small";
        case "M":
            return "Medum";
        case "L":
            return "Large"
        default:
            return "Unknown"
    }
}

Pizza.prototype.toppingsText = function() {
    var text = "";
    this.toppings.forEach(topping => text += topping.text() + ", ");
    return text;
}

function Topping(topping, cost) {
    this.topping = topping;
    this.cost = cost;
}

Topping.prototype.text = function() {
    switch (this.topping) {
        case "topping1":
            return "Cheese";
        case "topping2":
            return "Ham";
        case "topping3":
            return "Pineapple"
        case "topping4":
            return "Olives"
        case "topping5":
            return "Mushrooms"
        default:
            return "Unknown"
    }
}