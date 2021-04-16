const Annonce = require("../model");

const createAnnonce = (req, res, next) => {
 const body = req.body;

 Annonce.create(body).then((annonce) =>{
  res.send(annonce);
 }).catch(next);
};

const getAnnonces = (req, res, next) =>{ 
 Annonce.find().then((annonces) => res.send(annonces)).catch(next);
};

const getAnnonceById = (req, res, next) =>{
 Annonce.findById(req.params.id).then((annonce)=>{
  res.send(annonce)
 }).catch(next);
};

const updateOneAnnonce = async (req, res) => {

 const modif = await Annonce.updateOne({ _id: req.params.id }, req.body);

  if (modif.ok) {
    const annonce = await Annonce.findById(req.params.id);
    res.send(annonce);

    return;
  }

  res.send("error");;
};

const deleteAnnonceById =(req, res, next)=> {
 Annonce.findByIdAndDelete(req.params.id)
 .then(() =>{
  res.send("annonce supprimée");
 }).catch(next);
};

module.exports ={
 createAnnonce,
 getAnnonces,
 getAnnonceById,
 updateOneAnnonce,
 deleteAnnonceById
};
