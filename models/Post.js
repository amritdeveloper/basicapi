const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  img: {
    type: String,
    data: Buffer
  }
});

module.exports = mongoose.model("Posts", PostSchema);
