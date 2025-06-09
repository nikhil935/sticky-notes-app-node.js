const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique:true
    },
    content: {
      type: String,
      require: true,
    }
  },
  { timestamps: true }
);

const NOTES = mongoose.model("notes", notesSchema);
module.exports = NOTES;
