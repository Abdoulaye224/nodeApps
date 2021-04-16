const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
 name: {
  type: String
 },
 country: {
  type: String,
 }
});

const Animal= mongoose.model('animal', AnimalSchema); // comment notre schema va s'appeler dans la bdd

module.exports = Animal;