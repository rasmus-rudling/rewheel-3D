import mongoose from "mongoose";
// import uniqueValidator from "mongoose-unique-validator";

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
    unique: false,
  },
  lastName: {
    type: String,
    required: false,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
    required: false,
    unique: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  bikeBuilds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bike",
    },
  ],
});

// schema.plugin(uniqueValidator);
module.exports = mongoose.model("savedUser", schema);
