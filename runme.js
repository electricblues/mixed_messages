const wordsList = require("./words.json");
const sweetTreatsList = require("./sweetTreats.json");
const coffeShopsList = require("./coffeShops.json");

// generate random index
function generateRandom(array) {
  let randomWord = array[Math.floor(Math.random() * array.length)];

  return randomWord;
}

const randomWord = generateRandom(wordsList);
const randomSweetTreat = generateRandom(sweetTreatsList);
const randomCoffeShop = generateRandom(coffeShopsList);

console.log(
  `Hi! Today is a great day to treat yourself to something ${randomWord} next to your coffee. We think you'll love a ${randomSweetTreat}, and where better to try it then at ${randomCoffeShop}! `

  );





