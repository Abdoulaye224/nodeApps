const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const createRoutes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/project-db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).catch((error) => console.error(error)); 

createRoutes(app);


app.listen(2000, () => {
 console.log("app back is succefuly started on 2000!");
})