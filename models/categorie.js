const mongoose = require("mongoose")

const Schema = mongoose.Schema

const categorieModel = new Schema(
  {
    categoriename: "String",
    livrelistes: [{
      type: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true

      }
    }],
  }, { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('categorie', categorieModel)