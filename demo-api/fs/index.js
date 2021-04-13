const fs = require("fs");

fs.unlink("./test.txt", () => {console.log("le fichier  a bien été supprimé");})