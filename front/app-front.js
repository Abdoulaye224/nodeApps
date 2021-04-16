const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

const getAnnonce = (id) => {
 return fetch(`http://localhost:2000/${id}`, {
   headers: {
     "Content-Type": "application/json",
   },
 })
   .then((response) => response.json())
   .then((annonce) => {
     return annonce;
   })
   .catch((err) => {
     throw err;
   });
};

app.get("/", (req, res) => {
 fetch("http://localhost:2000/annonces", {
   headers: {
     "Content-Type": "application/json",
   },
 })
   .then((response) => {
     return response.json();
   })
   .then((annonces) => {
    res.render("templates/home", { annonces });
   }).catch((err) => {
    throw err;
  });
});

app.get("/:id", async (req, res) => {
 const annonce = await getAnnonce(req.params.id);

 res.render("templates/annonce", { annonce: annonce });
});

app.get("/create/annonce", (req, res) => {
 res.render("templates/create");
});

app.get("/update/:id", async (req, res) => {
 const annonce = await getAnnonce(req.params.id);

 res.render("templates/update", { annonce: annonce });
});

app.listen(3000, () => {
  console.log("app front is succefuly start on 3000 !");
});