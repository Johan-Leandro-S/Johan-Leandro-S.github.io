//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var btnRegistrar=document.getElementById("btnRegistrar");



//creamos un procedimiento para mostrar
function MostrarTarea(){
    
    //declaramos una viable para guardar los datos
    var listatarea=Mostrar();
    //selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    //agregamos al tbody las filas que se registren
    for(var i=0;i<listatarea.length;i++){
        //declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocat=fila.insertCell(3);
        var tituloturn=fila.insertCell(4);
        var tituloest=fila.insertCell(5);
        //agregamos los valores
        titulonom.innerHTML=listatarea[i].nombres;
        tituloape.innerHTML=listatarea[i].apellidos;
        titulodni.innerHTML=listatarea[i].dni;
        titulocat.innerHTML=listatarea[i].categoria;
        tituloturn.innerHTML=listatarea[i].turno;
        tituloest.innerHTML=listatarea[i].estado;
        tbody.appendChild(fila);
    }
}

//creamos un procedimiento para registrar los datos
function RegistrarTarea(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese sus Nombres");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingrese sus Apellidos");
        txtApe.focus();
    }else if(txtDni.value=="" || txtDni.value==null){
        alert("Ingrese su numero de dni");
        txtDni.focus();
    }else if(cboCurso.selectedIndex==0){
        alert("Seleccione su curso");
        cboCurso.focus();
    }else if(rbM.checked==false && rbT.checked==false && rbN.checked==false ){
        alert("seleccione una turno");
        rbM.focus();
    // }else if(chkEst.checked==false){
    //     alert("Seleccione si esta habilitado");
    //     chkEst.focus();
    }else{
        //capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var cat="";
    var indice=cboCurso.selectedIndex;
    switch(indice){
        case 1:
            cat="Diseño Web";
            break;
        case 2:
            cat="Base de Datos";
            break;
        case 3:
            cat="Programación Java";
            break;
        default:
            cat="";
            break;
    }

    var turn="";
    if(rbM.checked){
        turn="Mañana";
    }else if(rbT.checked){
        turn="Tarde";
    }else if(rbN.checked){
        turn="Noche";
    }else{
        turn="";
    }

    var est="";
    if(chkEst.checked){
        est="Habilitado";
    }else{
        est="Deshabilitado"
    }

    //llamamos al procedimiento registrar
    Registrar(nom,ape,dni,cat,turn,est);
    }
    
    //llamamos al preocedimiento a mostrar
    MostrarTarea();
}

//llamamos al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click",RegistrarTarea);