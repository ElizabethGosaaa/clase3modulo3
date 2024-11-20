// metodos y propiedades
//      indice    0    1     2     3
const frutas = ["🫐", "🍓", "🍎", "🥭"]
// vemos el tamaño que tiene el arreglo
console.log(frutas.length)
console.log(frutas)

// Acceso a elementos del array?
console.log(frutas[2])
// 2018 - 2022 
// se añadio el metodo at()
console.log(frutas.at(1))

// como obtener el último elemento
console.log(frutas.at(-1))
// antes 2021
console.log(frutas[frutas.lenght -1])

// añadir o eliminar elementos
// metodo push para agregar 
frutas.push("🍞", "🥩", "🥐",  "🧈")
console.log(frutas)

// pop()  para eliminar o asignar
// copia arreglo
const copyfrutas = [...frutas]

const last = frutas.pop()
console.log(last)

// mutabilidad
// existes metodos que modifican el arreglo original
console.log(frutas)

// unshift() y .shift()
// unshift () añade los elementos al inicio del elemento
console.log(frutas.unshift("😘"))
console.log(frutas)

// .shift()
// eliminar los primeros elementos del arreglo
console.log(frutas.shift("😘"))
console.log(frutas)
// aqui tambien se pueden asignar a una variable
console.log(frutas)

// concatenar arrays
// concact
const verduras = ["🫛", "🥬", "🥒", "🥦"]

const tienda = frutas.concat(verduras)
console.log(tienda)
console.log(tienda.concat(3, 4, 5))

// con el spread op
const tiendaSpread = [...frutas, ...verduras, ...tienda, "holi"]
console.log(tiendaSpread)

// arreglos y strings

// template strings
// split()  // metodo de string
// frutas.split() //no existe para arrays

const stringFrutas = "🫐, 🍓, 🍎, 🥭"
console.log(typeof stringFrutas)
const splitFrutas = stringFrutas.split(",")
console.log(splitFrutas)

const correo = "andii.candii10@gmail.com"
const nombre = correo.split("@")
console.log(nombre.pop())
// tema = destructuración de arreglos

// reverse // voltear al inverso
console.log(frutas.reverse())
// reverse también muta el arreglo original

// iterar arreglos
//
// ciclo for
let matchElement = ""
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
    if (frutas[i] === "🍎") {
        console.log("aqui están las manzanas")
        // parar la iteración
        matchElement = i
        break
    }
    matchElement = -1

}
console.log(matchElement)

// metodo indexOf
// funciones // programación funcional 
// encapsular un algoritmo para que sea re-usable
//
//function | arrow function
//1 sintaxis
// objeto this
function suma () {
    //scope
    const suma = 1 + 2
    // solo sirve para programar, debuguear el codigo 
    console.log("dentro de function", suma)
    // siempre usar return
    return suma
}

//alcace de una funcion
// ambito local
//scope global, variable que pueden ver todos
//scope locar, variable que solo esta dentro
// con el parentesis llamo o ejecuto la función
console.log(suma())
console.log()


//ATRIBUTOS DE UNA FUNCION
function resta (a, b){
    // estos atributos son variables que puedo usar dentro de la funcion
    // dentro del ambito de la funcion resta
    const result = a  - b
    return result
}

console.log(resta(700, 282))

function saludo(nombre, dia){
    return "buen " + dia + " " + nombre
}

console.log(saludo("noches", "Andrea"))
