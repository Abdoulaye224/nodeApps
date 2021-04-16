const Animal = require("../models");

const createAnimal = (req, res, next) => {
 const body = req.body; // reccupérer le body...

 //console.log("createAnimal call ", body);

 Animal.create(body).then((animal) =>{
  res.send(animal);
 }).catch(next);
};

const getAll = (req, res, next) => {
 Animal.find()
 .then((animals) => res.send(animals))
 .catch(next);
};

const getById = (req, res, next) => {
 const id = req.params.id;
 Animal.findById(id).then((animal) => {
  res.send(animal)
 }).catch(next);
};

const updateOne = (req, res, next) => {
 const id = req.params.id;
 const body = req.params.body;

 Animal.findByIdAndUpdate(id, body).then((animal) => {
  res.send(animal)
 }).catch(next);
};

module.exports = {
 createAnimal,
 getAll,
 getById,
};