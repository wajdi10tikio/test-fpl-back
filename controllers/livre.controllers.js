const livreModel = require("../models/livre")

exports.addLivre = async (req, res) => {
  const { titre,
    auteur,
    descrition,
    contenue, } = req.body
  try {
    const livre = await livreModel.findOne({
      titre
    })
    if (livre) {
      return res.status(403).json({
        error: 'Livre exist'
      })
    }
    const newLivre = new livreModel({
      titre,
      auteur,
      descrition,
      contenue,
    })
    livre = await newLivre.save()
    res.json(livre)
  } catch (error) {
    console.log(error)
    res.status(404).json(error.message)

  }
}

exports.livreFetch = async (req, res) => {
  try {
    const data = await livreModel.find({})
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(404).json(error.message)
  }
}