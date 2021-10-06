import mongoose from "mongoose";

export const Bike = mongoose.model("Bike", { color: String });
