const mongoose = require("mongoose");
const itemListSchema = new mongoose.Schema({
  textinput: {
    type: String,
    required: true,
  },
  numinput: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// exporting with mongoose model_name, model_schema, and collection_name
module.exports = mongoose.model("ItemList", itemListSchema, "items");
