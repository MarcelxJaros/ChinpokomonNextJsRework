import mongoose, { Schema } from "mongoose";

const ChinpokomonSchema = new Schema(
  {
    name: String,
    power: Number,
  },
  {
    timestamps: true,
  }
);

const Chinpokomon = mongoose.models.Chinpokomon || mongoose.model("Chinpokomon", ChinpokomonSchema);

export default Chinpokomon;