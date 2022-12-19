const mongoose = require("mongoose")
const Schema = mongoose.Schema

const livreSchema = new Schema(
  {
    titre: { type: String },
    auteur: { type: String },
    descrition: { type: String },
    contenue: { type: String },
  }, { timestamps: true, versionKey: false }
)

module.exports = mongoose.model("livre", livreSchema)