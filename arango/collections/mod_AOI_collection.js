const CollectionBase = require('./mod_collection_base');

class AOICollection extends CollectionBase {
    constructor(){
        super()
    }
    addAOI(payload) {
        console.log(payload)
        this._add(payload)
    }
    createAOICollection(){
        this._createCollection('my_db_collection');
        console.log('Created a collection');
    }
}

module.exports = AOICollection;