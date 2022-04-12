//Create a constructor with 4 properties and 3 methods
function PizzaMachine(size, toppings, crust, sauce) {
  (this.size = size),
    (this.toppings = toppings),
    (this.crust = crust),
    (this.sauce = sauce),
    (this.estimateDeliveryTime = function () {
      console.log("Calculating...");
    });

  this.burnMouth = function () {
    console.log("fkldlasikjd");
  };

  this.frisbee = function () {
    console.log("YYYeeeee");
  };
}

const pizza = new PizzaMachine(
  "large",
  ["spinach", "garlic"],
  "deep dish",
  "white"
);

PizzaMachine.prototype.cheese = true;

console.log(pizza.size); //large
console.log(pizza.toppings[0]); //spinach
pizza.frisbee(); //YYYeeeee
pizza.burnMouth(); //fkldlasikjd

console.log(pizza.cheese); //true
