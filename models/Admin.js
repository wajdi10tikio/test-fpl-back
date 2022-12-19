const mongoose = require("mongoose")

const Schema = mongoose.Schema

const adminModel = new Schema(
  {
    email: {
      type: "string",
      trim: true, /*trim enléve les espaces */
      unique: true /* si on mettre le méme email c impo */
    },
    password: { type: String },
    type: { type: String },
  }, { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('admin', adminModel)
