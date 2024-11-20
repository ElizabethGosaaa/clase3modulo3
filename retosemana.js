// Problema: Clasificación de Frutas

// Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

// Instrucciones:
// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.
// Opcional: intenta implementar la solución con el otro ciclo (for/while).

const frutas = [
    "manzana",
    "uva",
    "platano",
    "toronja",
    "arandano",
    "ciruela",
    "piña",
    "limon",
    "papaya",
    "sandia",
    "higo",
    "coco",
    "melon",
    "kiwi",
    "fresa",
    "frambruesa",
    "mango",
    "naranja",
    "mandarina",
    "durazno",
    "manzana",
    "higo"
]

const contador = {}
let sumaManzana =  0
let sumaHigo = 0

for (let i = 0; i < frutas.length; i++){
    if (frutas[i] === "manzana") {
        console.log("es una  manzana")
        sumaManzana = sumaManzana + 1
    }

    if (frutas[i] === "higo") {
        console.log("es un higo")
        sumaHigo = sumaHigo + 1
    }
}


console.log(contador)

