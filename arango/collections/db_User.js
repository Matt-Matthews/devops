const CollectionBase = require("./db_ArangoCrudBase");

class UserCollection extends CollectionBase {
  constructor() {
    super();
  }
  addAOI(payload) {
    console.log(payload);
    this._add(payload);
  }
}

module.exports = UserCollection;
