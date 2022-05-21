const { faker } = require("@faker-js/faker");

module.exports = {
  generateCat,
  generateCity,
  generateCountry,
  generateBirthDate,
  generateRandomCat,
};

function generateCat() {
  return faker.animal.cat();
}

function generateCity() {
  return faker.address.city();
}
function generateCountry() {
  return faker.address.country();
}

function generateBirthDate() {
  return faker.date.past(10);
}

function generateRandomCat() {
  const catName = faker.animal.cat();
  const catAddress = faker.address.city();
  const catCountry = faker.address.country();
  const catBDay = faker.date.past(10);
  const belovedMusic = faker.music.genre();
  return (randomCat = {
    name: catName,
    birth_Day: catBDay,
    home_City: catAddress,
    country: catCountry,
    favourite_music: belovedMusic,
  });
}
