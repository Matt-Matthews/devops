const uuid = require("uuid").v4;

const { Category } = require("../Models/CategoryModel");
const { Location } = require("../Models/LocationModel");
const { Events } = require("../Models/EventModel");

const categories = require("../data/categories.json");
const location = require("../data/locations.json");
const events = require("../data/events.json");

const insertCategories = async () => {
  const _categoriesBulk = [];
  for (const cat of categories) {
    _categoriesBulk.push({
      categoryId: uuid(),
      categoryTitle: cat.title,
      categoryColor: "blue",
      categoryImage: "http://",
    });
  }
  await Category.bulkCreate(_categoriesBulk);
};

const insertLocations = async () => {
  const _locationBulk = [];
  for (const loc of location) {
    // console.log(loc);
    _locationBulk.push({
      locationId: uuid(),
      locationAddress: loc.address,
      locationLatitude: loc.lat,
      locationLongitude: loc.lng,
    });
  }
  await Location.bulkCreate(_locationBulk);
};

const insertEvents = async () => {
  const _eventBulk = [];

  for (const event of events) {
    _eventBulk.push({
      eventId: uuid(),
      eventTitle: event.title,
      eventDescription: event.description.substring(0,224),
      eventDate: Date.now(),
      eventTime: "12:00:00",
      eventContact: event.contact,
      eventUrls: event.urls,
      eventConditions: event.conditions,
      categoryId: "6331437d-be22-41f3-8026-8ea1c239c2d0",
      locationId: "b357146a-e092-4a55-93d9-5ae37a781935",
      userId: "fani@gmail.com",
    });
  }
  await Events.bulkCreate(_eventBulk);
};

const main = () => {
  //   insertCategories();
  //   insertLocations();
//   insertEvents()
};

main();
