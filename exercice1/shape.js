 class Shape {

  constructor (name, sideNumber){
   this.name = name;
   this.sideNumber = sideNumber;
  }

  print(area){
   return `La forme "${this.name}" à ${this.sideNumber} cotés, son aire est de ${area}.`;
  }
 }

 module.exports = Shape;
