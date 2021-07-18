//crear un vector que contenga la imfomacion del registro
var tarea=[];
//creamos un procedimiento para poder registrar
function Registrar(nomtarea,apetarea,dnitarea,cattarea,turtarea,esttarea){
    var Nuevotarea={
        nombres:nomtarea,
        apellidos:apetarea,
        dni:dnitarea,
        categoria:cattarea,
        turno:turtarea,
        estado:esttarea
    };
    tarea.push(Nuevotarea);
}

//creamos una funcion para mostrar la informacion del registro
function Mostrar(){
    return tarea;
}