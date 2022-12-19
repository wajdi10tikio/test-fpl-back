const categorieModel = require("../models/categorie")

exports.addCategorie = async (req, res) => {

  const {
    categoriename,
    livrelistes
  } = req.body

  try {
    const categorie = await categorieModel.findOne({
      categoriename
    })

    if (categorie) {
      return res.status(403).json({
        error: 'Categorie exist'
      })
    }
    const newCategorie = new categorieModel({
      categoriename,
      livrelistes
    })
    categorie = await newCategorie.save()
    res.json(categorie)
  } catch (error) {
    console.log(error)
    response.status(500).send('Erreur de serveur')
  }









}

exports.categoriesFetch = async (req, res) => {
  try {
    let data = await categorieModel.find({}).populate('livrelistes')
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(404).json(error.message)
  }
}