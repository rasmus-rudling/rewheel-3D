import mongoose from "mongoose";
// import uniqueValidator from "mongoose-unique-validator";

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
    unique: false,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: false,
    unique: false,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  imgUrl: {
    type: String,
    required: false,
    unique: false,
    minlength: 3,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  bikeBuilds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bike",
    },
  ],
});

// schema.plugin(uniqueValidator);
module.exports = mongoose.model("User", schema);
