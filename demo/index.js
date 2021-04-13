const fs = require('fs');

console.log(fs.Dir);

const axios = require("axios").default;

// axios.get("https://google.com").then((response) => console.log(response));

const module_1 = require("./module1.js");
console.log(module_1);

const module_2 = require("./folder/module2.js");

console.log(module_2);

const folde_2 = require("./folder_2");

folde_2.myFunc();
folde_2.myFunc2("abdou");