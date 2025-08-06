// Step 1: Global Scope Variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function Scope
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Step 3: Block Scope
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Step 4: Change Global Variable
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}