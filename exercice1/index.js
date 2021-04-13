const Shape = require("./shape.js");
const Square = require("./square");
const Triangle = require("./triangle");

//const shape1 = new Shape("aire1", 34);
const square = new Square('carré', 4, 5);
const triangle = new Triangle('triangle', 3, 7, 9);


//console.log(shape1.print("23"));
console.log(square.print(square.area()));
console.log(triangle.print(triangle.area()));