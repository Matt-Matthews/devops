const CollectionBase = require("./mod_collection_base");

class AOICollection extends CollectionBase {
  constructor() {
    super();
  }
  addAOI(payload) {
    console.log(payload);
    this._add(payload);
  }
  async createAOICollection() {
    await this._createCollection("vehicles");
  }
}

module.exports = AOICollection;
