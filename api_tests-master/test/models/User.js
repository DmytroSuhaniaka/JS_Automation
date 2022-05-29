const { generateRandomUser } = require("../helpers/dataHelpers");
const BaseModel = require("./BaseModel");

class User extends BaseModel {
  constructor(data = generateRandomUser()) {
    super();
    Object.keys(data).forEach((key) => (this[key] = data[key]));
  }

  static path = "/users";
  static postsPath = "/posts";
  static postTodos = "/todos";
  static schema = ["id", "name", "email", "gender", "status", "todo"];

  static async seed(quantity = 5) {
    return super.seed(quantity, generateRandomUser);
  }

  // hw
  // async getPosts  ()

  async getPosts() {
    const Model = this;
    let response;
    try {
      response = await Model.client.get(
        `${Model.path}/${path}/${this.id}/${postPath}`
      );
    } catch (e) {
      response = e.response;
    }

    return response;
  }
  // hw
  // async getTodo  ()

  async getTodos() {
    const Model = this;
    let response;
    try {
      response = await Model.client.get(
        `${Model.path}/${path}/${this.id}/${postTodos}`
      );
    } catch (e) {
      response = e.response;
    }

    return response;
  }
}

module.exports = User;
