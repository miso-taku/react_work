import mongoose from "mongoose"

const schema = mongoose.Schema

const ItemSchema = new schema({
  title: String,
  image: String,
  price: String,
  description: String,
  email: String,
});

export const ItemModel = mongoose.model.Item || mongoose.model("Item", ItemSchema)
