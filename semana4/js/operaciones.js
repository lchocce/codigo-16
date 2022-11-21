
let numero1 = 2;
let numero2 = 3;
console.log("suma", numero1 + numero2);
console.log(Number("12HOLA"));

// Math
const operacion = 3*2+6-2/2;
//Math.sqrt = raiz cuadrada;
console.log(Math.sqrt(operacion));
//Math.pow
console.log(Math.pow(6,3));
console.log(Math.pow(4,3));
//c2 = a2 + b2
// c = -/a2 + b2
//vamos a ver como solicitar un dato del navegador
//prompt: Muestra una alerta para ingresar datos
//El valor que coloquemos se usara en la variable

//! Nota todo valor recinido en el prompt es un string

//const catetoA = Number(prompt("ingrese el valor de A"));
//const catetoB = Number(prompt("ingrese el valor de B"));

//const operacion2 = Math.sqrt(Math.pow(catetoA,2) + Math.pow(catetoB,2));
//console.log("la hipotenusa es", operacion2);
//Problema
//Hacer un algoritmo que halle el area de un rectangulo
// A = base x altura


//problema1
//const ladoA = Number(prompt("ingrese el valor del lado A"));
//const ladoB = Number(prompt("ingrese el valor del lado B"));

//const RectanguloArea = Math.sqrt(Math.pow(ladoA,2) + Math.pow(ladoB,2));
//console.log("El Area del Rectangulo es", RectanguloArea, "metros cuadrados");

//Problema 2
//hallar el area de un circulo
//A = pi x R2 (r al cuadrado)

const Radio = Number(prompt("Ingrese el valor del Radio"));
const PI = Number(Math.PI);
console.log("El Area Del Círculo Es" ,(Radio * PI), "metros cuadrados");
