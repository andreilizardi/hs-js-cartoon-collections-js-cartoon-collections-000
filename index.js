// Problema 1

let dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

const dwarfRollCall = (dwarfArray) => {
let output = '';
  dwarfArray.forEach((name, i) => {
    output += `${i+1}. ${name} `;
  });
  return output;
};

// Problema 2

let planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

const summonCaptainPlanet = (inputArray) => {
for(let i = 0; i < inputArray.length; i++) {
       inputArray[i] = inputArray[i].toUpperCase() + '!';
  }
  return inputArray;
};

// Problema 3

let shortWords = ["wind", "fire"];
let assortedWords = ["earth", "wind", "heart", "fire"];

const longPlaneteerCalls = (inputArray) => {
  let output = false;

inputArray.forEach(name => {
  if (name.length > 4) {
  output = true;
  }
})
return output;
};

// Problema 4

const cheeses = ["cheddar", "gouda", "camembert"];

const snacks = ["crackers", "gouda", "thyme"];

const soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"];

const ingredients = ["garlic", "rosemary", "bread"];

const findTheCheese = (inputArray) => {
  let output = `no cheese!`;
 
   for (let i = 0; i < inputArray.length; i++) {
    let name = inputArray[i];
      if (cheeses.includes(name)) {
        output = name;
          break;
  }
   }  
return output;
};
