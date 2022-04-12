//Create a dog object that has four properties and three methods
const dog = {
  name: "Tylor",
  color: "brown",
  breed: "French Bulldog",
  isVaccinated: true,
  bark: function () {
    console.log("Grrr! Grr!");
  },
  walk: function () {
    console.log("Run for fun!");
  },
  eat: function () {
    console.log("Eat food.");
  },
};

console.log(dog.name); //Tylor
console.log(dog.breed); //French Bulldog
console.log(dog.isVaccinated); //true
dog.bark(); //Grrr! Grr!
dog.walk(); //Run for fun!
dog.eat(); //Eat food.
