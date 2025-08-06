console.log("Server funcionado ok ...");

let array = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]
const condicion = "string"

const nuevoArray = [...new Set(array.filter((element) => typeof(element) == condicion).sort())]

console.log(nuevoArray);
