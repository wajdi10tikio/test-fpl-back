const mongoose = require("mongoose")
const Schema = mongoose.Schema

const clientModel = new Schema(
  {
    name: "string",
    email: {
      type: "string",
      trim: true, /*trim enléve les espaces */
      unique: true /* si on mettre le méme email c impo */
    },
    password: "string",
    type: "string"
  }, { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('client', clientModel)