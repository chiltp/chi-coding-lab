/*
Create a lunch menu system using an array and functions to add, remove, display, and randomly select lunch items.
Requirements:
- Initialize an empty array lunches.
- addLunchToEnd(arr, item) → add item to the end, log "[item] added to the end of the lunch menu.", return the array.
- addLunchToStart(arr, item) → add item to the start, log "[item] added to the start of the lunch menu.", return the array.
- removeLastLunch(arr) → remove the last item, log "[item] removed from the end of the lunch menu." or "No lunches to remove.", return the array.
- removeFirstLunch(arr) → remove the first item, log "[item] removed from the start of the lunch menu." or "No lunches to remove.", return the array.
- getRandomLunch(arr) → log Randomly selected lunch: [item] or "No lunches available.".
- showLunchMenu(arr) → log Menu items: item1, item2... or "The menu is empty.".
*/

const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  const removedItem = arr.pop();
  if (!arr.length) {
    console.log("No lunches to remove.");
  } else {
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return arr;
}

function removeFirstLunch(arr) {
  const removedItem = arr.shift();
  if (!arr.length) {
    console.log("No lunches to remove.");
  } else {
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return arr;
}

function getRandomLunch(arr) {
  const randomItem = Math.floor(Math.random() * arr.length);
  if (!arr.length) {
    console.log("No lunches available.");
  } else {
    console.log(`Randomly selected lunch: ${arr[randomItem]}`);
  } 
}

function showLunchMenu(arr) {
  if (!arr.length) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}

// Test cases
addLunchToEnd(lunches, "Tacos"); // Tacos added to the end of the lunch menu.
addLunchToEnd(["Pizza", "Tacos"], "Burger"); // Burger added to the end of the lunch menu.
addLunchToStart(lunches, "Sushi"); // Sushi added to the start of the lunch menu.
addLunchToStart(["Burger", "Sushi"], "Pizza"); // Pizza added to the start of the lunch menu.
removeLastLunch(["Stew", "Soup", "Toast"]); // Toast removed from the end of the lunch menu.
removeLastLunch(["Sushi", "Pizza", "Noodles"]); // Noodles removed from the end of the lunch menu.
removeFirstLunch(["Salad", "Eggs", "Cheese"]); // Salad removed from the start of the lunch menu.
removeFirstLunch(["Sushi", "Pizza", "Burger"]); // Sushi removed from the start of the lunch menu.
getRandomLunch(["Pasta", "Sandwich", "Wrap"]); // Randomly selected lunch: (random item)
getRandomLunch(lunches); // Randomly selected lunch: (random item)
showLunchMenu(["Greens", "Corns", "Beans"]); // Menu items: Greens, Corns, Beans
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]); // Menu items: Pizza, Burger, Fries, Salad