const { db } = require("../index");

class CollectionBase {
  async _createCollection(collectionName) {
    const schema = {
      rule: {
        properties: {
          nums: {
            type: "array",
            items: {
              type: "number",
              maximum: 6,
            },
          },
        },
        additionalProperties: {
          type: "string",
        },
        required: ["nums"],
      },
      message: "The document does not contain an array of numbers is attribute",
    };
    const user = await db.login(
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD
    );
    const dbInstance = db.database("myDB");
    const collection = db.collection(collectionName);
    await collection.create({ schema });
  }
  _add(payload) {}
  _read(query) {}
}
module.exports = CollectionBase;
