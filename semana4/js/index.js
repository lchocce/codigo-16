//variable que pueda cambiar de tipo
let numero = 10;
console.log("Primer tipo", numero);
//podemos cambiar el tipo de dato?
//cuando alteramos el valor de una variable ahce falta poner let o const?
//let o const va solo cuando se crea la variable
numero = "Pepe"
console.log("Segundo tipo", numero);

// vamos a ver el console.log()
// permite imprimir  un valor en la consola del navegador
//console.log(numero);

//!Const
const igv = 0.18
console.log("Primer igv", igv);
//! Esto no es posible
//igv = 0.2;
//console.log("Segundo igv", igv);
//Las constantes tienen solo un valor

//Existe otra forma de mostrar una variable
// alert: dispara una alerta en nuestro navegador
//alert(igv);

//Concatenaciones: Básicamente es juntar dos o mas variables
let primerNombre = "Luis";
let primerApellido = "Chocce";

//Para concatenar dos o mas strings usamos el operador +
console.log(primerNombre + " " + primerApellido);