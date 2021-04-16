const {createAnnonce, getAnnonces, getAnnonceById, updateOneAnnonce, deleteAnnonceById} = require("../controllers");

const createRoutes = (app) => {

 app.get("/annonces", getAnnonces);

 app.get("/:id", getAnnonceById);

 app.post('/createAnnonce', createAnnonce);

 app.put("/updateAnnonce/:id", updateOneAnnonce)

 app.delete("/annonce/:id", deleteAnnonceById);

}

module.exports = createRoutes;