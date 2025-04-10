const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: {
      filename: String,
      url: String,
    },
    default: {
      filename: "default",
      url: "https://unsplash.com/photos/sunset-on-the-beach-with-a-surfer-NgvCdjrW1tE",
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
