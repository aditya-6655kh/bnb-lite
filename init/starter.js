const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const data = require("./data.js");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/bnb-lite");
  console.log("Connected to MongoDB");

  await seedDatabase();
  mongoose.connection.close();

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const seedDatabase = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data.data);
  console.log("Database seeded!");
};
