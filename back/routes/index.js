//const controller = require("../controllers")
const { createAnimal, getAll, getById } = require("../controllers")

const createRoutes = (app) => {
 // création des routes
 app.get("/", getAll);

 app.get("/:id", getById);

 //app.post('/', (req, res, next) => createAnimal(req, res, next));
 app.post('/', createAnimal);


}

module.exports = createRoutes;