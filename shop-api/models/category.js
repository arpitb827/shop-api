const mongoose = require("mongoose");

var childCategorySchema = new mongoose.Schema({
  name: { type: String, unique: false},
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  }
});

const catrgorySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  childCategories: [ childCategorySchema],
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  }
});

module.exports = mongoose.model("Category", catrgorySchema);
