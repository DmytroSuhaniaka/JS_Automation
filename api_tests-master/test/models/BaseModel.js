const axios = require("../helpers/request");
const User = require("./User");

class BaseModel {
  constructor() {}

  static client = axios;

  static create(data) {
    const Model = this;
    return new Model(data);
  }

  static async find(queryParams) {
    const Model = this;
    let response;
    try {
      response = await Model.client.get(Model.path, { params: queryParams });
      response.data = response.data.map((obj) => new Model(obj));
    } catch (e) {
      response = e.response;
    }
    return response;
  }

  static async findBy(key, value) {
    //const Model = this
    return await this.find({ [key]: value });
  }

  static async findById(id) {
    const Model = this;
    let response;
    try {
      response = await Model.client.get(`${Model.path}/${id}`);
    } catch (e) {
      response = e.response;
    }

    return response;
  }
  // static return the value. calls the method without creatig the instance.
  // async is about how it should be launched

  static async findByName(name) {
    return await this.findBy("name", name);
  }

  static async seed(quantity = 5, generateModelData) {
    const Model = this;
    let data = Array.from(Array(quantity).keys()).map(() =>
      generateModelData()
    );
    const savePromises = data.map((item) =>
      Model.client.post(Model.path, item)
    );
    const result = await Promise.all(savePromises);
    const resultdata = result.map((item) => Model.create(item.data));
    return resultdata;
  }

  async save() {
    const Model = this.constructor;
    let response;
    try {
      response = await Model.client.post(Model.path, this);
      response.data = new Model(response.data);
    } catch (e) {
      response = e.response;
    }

    return response;
  }

  //hw
  async remove() {
    const Model = this.constructor;
    let result;
    try {
      result = await Model.client.delete(`${Model.path}/${this.id}`);
    } catch (e) {
      result = e.response;
    }
    return result;
  }

  //hw
  async update(updateData) {
    // update data - object with info to update.
    const Model = this.constructor;
    let result;
    try {
      result = await Model.client.put(`${Model.path}/${this.id}`, updateData);
    } catch (e) {
      result = e.response;
    }
    return result;
  }

  //hw
  async cleanupSeeds(seeds) {
    // cant be static as we need to search through the created intances

    const cleanUpPromises = seeds.map((seed) =>
      Model.client.delete(`${Model.path}/${seed.id}`)
    );

    const result = await Promise.all(cleanUpPromises);
    return result;
  }
}

module.exports = BaseModel;
