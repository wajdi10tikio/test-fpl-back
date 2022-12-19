const isEmpty = require("./isEmpty")
const validator = require("validator")


module.exports = function validateLogin(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : ""
  data.email = !isEmpty(data.email) ? data.email : ""
  data.password = !isEmpty(data.password) ? data.password : ""
  data.confirm = !isEmpty(data.confirm) ? data.confirm : ""

  // validation email
  if (!validator.isEmail(data.email)) {
    errors.email = "Required format email"
  }


  // required email
  if (validator.isEmpty(data.email)) {
    errors.email = "Required email"
  }

  // required password
  if (validator.isEmpty(data.password)) {
    errors.password = "Required password"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }

}