const express = require("express");

const app = express();  // là j'ai mon appli express

const http = require("http").Server(app) // notre server http utilisera notre app express

const io = require("socket.io")(http);

//app.use(express.static('public')); // pour rendre les fichiers statics express

app.get('/', (req, res) => {
 res.sendFile(`${__dirname}/index.html`);
})

/**
 *  on met une fonction liestener qui permet de faire qlq chose une fois qu'on est connecté
 * 
 * on fait un tableau de user, à chaque conection on ajoute le user dans ce tableau
 * emit nous permet d'envoyer des évenements
 */
let users =[];


io.on("connection", (socket) => {
console.log("A new user is connected");

users.push({
 id: socket.id,
 username: `User ${socket.id}`
});

io.emit("user connected", users); // quand on reçevra un message du genre "user conected", on renvoie le tab de users

socket.on('disconnect', () => {
 console.log("A user disconnected");

 const updatedUsers = users.filter((user) => user.id !== socket.id); // on filtre sur l'id des gens qui sont encore connectés
 users = updatedUsers;

 io.emit("user disconnected", socket.id); // l'id de user qui s'est deconnecté
});

socket.on("message", (message) => {
 console.log(message)
})
}) 

http.listen(3000, () => {
   console.log("chat server is ready");
})