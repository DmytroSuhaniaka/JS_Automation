require("dotenv").config();
const { generateRandomCat } = require("../utils/dataHelper");
const TOKEN = process.env.TOKEN;
const axios = require("axios");
const { assert } = require("chai");
const BASE_URL = "https://gorest.co.in/public/v2";
const configAuth = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};
//const mocha = require("mocha");
// describe and 'it' are the parts of mocha runner
// axios- requests manager
// describe("", () => {});

describe("Test set of true real API Tests: ", () => {
  it("Test Case 1 ( Can we get the connection to database? )", async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    const { status, statusText, data: users } = response;
    assert.equal(status, 200, "OK");
  });

  it("Test Case 2 ( Can we try this URL? )", async () => {
    const response = await axios.get(`${BASE_URL}/wrongurl`);
    const { status, statusText, data: users } = response;
    assert.equal(status, 404, "NOT FOUND");
  });

  it("Test Case 3 ( Is the saved cat identical to the original one? )", async () => {
    const misterCat = generateRandomCat();
    // console.log("Your precios cat:", misterCat);

    const {
      status,
      statusText,
      data: returnedCat,
    } = await axios.post(`${BASE_URL}/users`, misterCat, configAuth);

    //const returnedCat = response.data;
    assert.ownInclude(returnedCat, misterCat, "cat is safe and saved ");

    //console.log(Object.keys.response);
  });

  it("Test Case 4 ( Is the cat ok afterall? )", async () => {
    const allDataIsSavedProperly = Object.keys(misterCat).every(
      (key) => misterCat[key] === returnedCat[key]
    );
    assert.isTrue(allDataIsSavedProperly, "all cat data is saved perfectly");
  });

  it("Test Case 5 ( Where is Barsik? )", async () => {
    const fluffName = "Barsik";
    const config = {
      ...config,
      params: { fluffName },
    };

    const catMustBeFoundByName = users.every((user) => user.name === fluffName);
    assert.isTrue(
      catMustBeFoundByName,
      `Did You found my lovely ${fluffName} ?`
    );
  });
});
