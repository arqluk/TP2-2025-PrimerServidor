const fs = require("fs")

console.log("Server funcionado ok ...");

let arrayOriginal = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]
const condicion = "string"
const condicionesValidas = new Set( ["number", "string", "boolean"] );

const nuevoArray = [...new Set(arrayOriginal.filter((element) => typeof(element) == condicion).sort())]

console.log(nuevoArray);

const filtrarDatos = (datos, condicion) => {

 try {
        // Verificación de condición válida
        if (!condicionesValidas.has(condicion)) {
            throw new Error("Falta condición o condición inválida");
        }

        const arrayDatosFiltrados = datos.filter( (elemento) => typeof(elemento) === condicion ).sort()

        const arrayDatosFiltradosSinRepetidos = [...new Set(arrayDatosFiltrados)]

        if (arrayDatosFiltradosSinRepetidos.length > 0) {
            fs.writeFileSync( "document.txt", arrayDatosFiltradosSinRepetidos.join(", ") )
            const textoArchivo = fs.readFileSync("document.txt", "utf-8")
            console.log('ArrayDatosFiltradosSinRepetidos (como texto): ', textoArchivo)
        }
    } 
    catch (error) {
        console.log("Se produjo un error: ", error.message)
    }

}


// Invocación válida
filtrarDatos(arrayOriginal, condicion)

// Invocación sin condición
filtrarDatos(arrayOriginal)

// Invocación con condición inválida
filtrarDatos(arrayOriginal, "condicion")


