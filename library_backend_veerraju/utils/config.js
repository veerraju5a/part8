require('dotenv').config()

let MONGODB_URI = "mongodb://localhost:27017/"
let JWT_SECRET = process.env.JWT_SECRET
let PASSWORD = process.env.PASSWORD

module.exports = {
  MONGODB_URI,
  JWT_SECRET,
  PASSWORD
}