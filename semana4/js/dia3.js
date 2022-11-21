document.write("<h1>Dia 3 Switch</h1>");

//SWITCH
//Problema: En base a la nota escribir un mensaje
//nota < 13 = "Debe mejorar"
//nota > 14 = "Alumno promedio"
//nota > 18 = " Alumno sobresaliente"
// nota === 20 = "Alumno genio"

let angulo = 156;
document.write( "<p>" + angulo + "</p>" );

let mensaje = "<p>InExS</p>"

if (angulo === 0){
    mensaje = "<p>Nulo</p>";
}   else if (angulo < 90) {
    mensaje = "<p>Agudo</p>";
}   else if (angulo === 90) {
    mensaje = "<p>Recto</p>"
}   else if (angulo < 180) {
    mensaje = "<p>Obtuso</p>"
}   else if (angulo === 180) {
    mensaje = "<p>Llano</p>"
}   else if (angulo < 360) {
    mensaje = "<p>Concavo</p>"
}   else if (angulo === 360) {
    mensaje = "<p>Completo</p>"
}   
document.write(mensaje)

//switch (angulo) {
//    case 0:
//        document.write("<p>nulo</p>")
//        break;
//    case 10:
//        document.write("<p>base 1</p>")
//        break;
//    case 20:
//        document.write("<p>base 2</p>")
//        break;
//    case 30:
//        document.write("<p>base 3</p>")
//        break;
//    case 40:
//        document.write("<p>base 4</p>")
//        break;
//    default:
//        console.log("Este caso no esta contemplado");
//        //despues de default no se usa break
//
//}

