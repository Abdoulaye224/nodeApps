const { restart } = require("nodemon");
const { Car } = require("../models");

const getCars = (req, res, next) => {
  Car.find()
  .then((cars) => {
    res.send(cars);
  })
  .catch(next);
};

const getCarByID = (req, res, next) => {
  Car.findById(req.params.id).then((car) => {
    res.send(car);
  }).catch(next);
};

const createCar = (req, res, next) => {
  Car.create(req.body)
    .then((car) => { // on peut tout faire dans le then (par exemple pour un user, on supprime quelque truc) ou dire créer un  autre objet qu'on va enregistrer
      res.send(car);
    })
    .catch(next);
};

const updateCarByID = async (req, res, next) => {
  const modification = await Car.updateOne({_id: req.params.id}, req.body); // tant que cette promise n'est pas repondue on passe pas à la suite

  if (modification.ok){
    const car = await Car.findById(req.params.id);
    res.send(car);

    return;
  }
  
  res.send("ERROR");
  
  // Car.findByIdAndUpdate(req.params.id, req.body)
  // .then((car) => {
  //   res.send(car)
  // }).catch(next);
};

const deleteCarByID = (req, res, next) => {
  Car.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("deleted");
    })
    .catch(next);
};

module.exports = {
  getCars,
  getCarByID,
  createCar,
  updateCarByID,
  deleteCarByID,
};
