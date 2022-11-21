let nombres=["Luis","Eduardo","Chocce", "Vela"]
let numeros=[1, 2, 3, 4, 5, 6, 7]

//Combinando datos
const arregloDatos=[    "Juan", 
                        3, 
                        false,
                        0.5,
                        ["juan", "pepe", "lucho"]]
                        
console.log (arregloDatos);

//Acceder al ultimo dato
console.log ("El ultimo dato es", arregloDatos[arregloDatos.length-1])
document.write ("El ultimo dato es ", arregloDatos[arregloDatos.length-1])

//Push: Sirve para agregar un elemento al array
//Agrega datos ne la ultima posicion
arregloDatos.push ("a", "b", "c", [1, 2, 3, ["papaya", "palta", "camote"]])
console.log("datos con push", arregloDatos)
console.log(arregloDatos[8][3][0])
document.write(arregloDatos[8][3][0])
//Un array dentro de un array

