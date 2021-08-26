const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");

const planetBuilder = (array) => {
  array.forEach((arrayObj) => {
    planetEl.innerHTML += `
    <h1>${arrayObj}</h1>
    `;
  });
};

// planetBuilder(planets);
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalPlanets = planets.map((planet) => {
  return planet[0].toUpperCase() + planet.slice(1);
});

// planetBuilder(capitalPlanets);
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsWithE = capitalPlanets.filter((planet) => {
  let hasLetterE = false;

  if (planet.includes("e") || planet.includes("E")) {
    hasLetterE = true;
  }

  return hasLetterE;
});

console.log(planetsWithE);

planetBuilder(planetsWithE);
