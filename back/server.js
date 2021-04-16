const express = require("express");
const mongoose = require('mongoose'); // on peut mettre dans un fichier database par exmple;;;

const createRoutes = require('./routes');

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/demo-crud") // connection à la base de données

createRoutes(app); // pas obligatoire


app.listen(3000, () =>{
 console.log("SERVER is working");
})