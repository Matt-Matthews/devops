const { db } = require("../index");

class CollectionBase {
    async _createCollection(collectionName){
        const schema = {
            rule: {
                properties: { 
                    nums: {
                        type: "array",
                        items:{
                            type: "number",
                            maximum: 6
                        }

                    }
                },
                additionalProperties: {
                    type: "string"
                },
                required: ["nums"]
            },
            message: "The document does not contain an array of numbers is attribute",
        }
        console.log(db)
        await db.createCollection(collectionName, {schema})
        // db._create(collectionName, {"schema": schema});
    }
    _add(payload){}
    _read(query) {}
}
module.exports = CollectionBase;