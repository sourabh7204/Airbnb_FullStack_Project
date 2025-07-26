const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//all data we need
const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },

  //=>By this we can Add filters to our projects
  // category: {
  //   type: string,
  //   enum: ["mountains", "arctic", "deserts"],
  // },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
