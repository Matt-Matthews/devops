const { db } = require("../index");

class CollectionBase {
  _add(payload) {

  }
  async _read(payload) { 
    const { collectionName, serial } = payload;
    const collection = db.collection(collectionName);
    try{
      const res = await collection.document(serial);
      // console.table(res);
      return res;
    }catch(err){
      console.log(err.message);
    }

    
  }
  async _update(payload) {
    const { collectionName, data } = payload;
    const collection = db.collection(collectionName);
    try {
      const res = await collection.update(data._key, data)
      // TODO: Handle Success
      console.log(res);
    } catch (error) {
      // TODO: handle Error
      console.log(error);
    }
  }
}
module.exports = CollectionBase;
