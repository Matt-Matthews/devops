const { db } = require('../arango');

const connect = async() => {
    const user = await db.login(
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD
      );

      console.log("AUTHINTICATION DONE:", user)
}

const createCollection = async (collectionName) => {
    const collection = db.collection(collectionName);
    await collection.create();
}


const main = async () => {
    await connect()

    await createCollection('users')
    

    console.log("Initialization of the collections done...")
}

main()