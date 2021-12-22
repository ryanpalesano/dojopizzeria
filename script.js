function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "detroit", ["mozzarella"], ["pepperoni", "hamburger"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "parmesan"], ["mushrooms", "black olives", "green olives"]);
console.log(pizza2);

var pizza3 = pizzaOven("new york", "thin", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", "mozzarella", ["mushrooms", "pineapples"]);
console.log(pizza2);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "gluten free",
    "detroit",
    "stuff crust"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "extra red sauce",
    "red sauce",
    "the only sauce is red sauce!"
];

var cheeses = [
    "mozzarella",
    "feta",
    "provolone",
    "parmesan",
];

var toppings = [
    "pepperoni",
    "sausage",
    "olives",
    "bell peppers",
    "mushrooms",
    "anchovies"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());