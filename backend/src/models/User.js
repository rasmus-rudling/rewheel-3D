import mongoose from "mongoose";
// import uniqueValidator from "mongoose-unique-validator";

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
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
