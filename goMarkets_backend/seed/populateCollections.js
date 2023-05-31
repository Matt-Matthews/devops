// const cameras = require("../data/cameras.json");
// const cameraIntalltion = require("../data/cameraInstallations.json");
// const routers = require("../data/routers.json");
// require("dotenv").confi;
// const { db } = require("../arango");

// const connect = async () => {
//   const user = await db.login(process.env.DB_USERNAME, process.env.DB_PASSWORD);
//   console.log("AUTHINTICATION DONE:", user);
// };

// const populateCameras = async () => {
//   const collection = db.collection("cameras");
//   cameras.forEach(async (cameraDoc) => {
//     await collection.save(cameraDoc);
//   });
// };
// const populateCameraInstallations = async () => {
//   const collection = db.collection("cameraInstallations");
//   cameraIntalltion.forEach(async (doc) => {
//     await collection.save(doc);
//   });
// };
// const populateRouters = async () => {
//   const collection = db.collection("routers");
//   routers.forEach(async (doc) => {
//     await collection.save(doc);
//   });
// };

// const main = async () => {
//   await connect();
//   await populateCameras();
//   await populateCameraInstallations();
//   await populateRouters();
// };

// main();
