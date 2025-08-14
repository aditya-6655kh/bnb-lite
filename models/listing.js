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
    url: {
      type: String,
      set: (v) =>
        v == ""
          ? "https://imgs.search.brave.com/vEBxRu8eLA5e6VqXdX4FqDQTd11YTyry7M-byXJ7ieI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2YwZS9lbGVn/YW50LWNvYXN0YWwt/aG9tZS0wNDEwLTU3/MDU1MTIuanBnP2Zt/dA"
          : v,
      default:
        "https://imgs.search.brave.com/vEBxRu8eLA5e6VqXdX4FqDQTd11YTyry7M-byXJ7ieI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2YwZS9lbGVn/YW50LWNvYXN0YWwt/aG9tZS0wNDEwLTU3/MDU1MTIuanBnP2Zt/dA",
    },
  },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
