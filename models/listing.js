const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/bnb-lite');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    filename: { type: String, default: "default" },
    url: { type: String, default: "Red heart.jpg" },
  },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
