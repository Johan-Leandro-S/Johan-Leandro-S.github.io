//declarando variables para los controles
var txtNom=document.getElementById("txtNom")
var txtApe=document.getElementById("txtApe")
var txtCor=document.getElementById("txtCor")
var rbMas=document.getElementById("rbMas")
var rbFem=document.getElementById("rbFem")
var rbOtr=document.getElementById("rbOtr")
var chkEst=document.getElementById("chkEst")

//creamos procedimientos para validar
//nombre
function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus nombres</li>";
    }else{
        error.style.display="none"
    }
}

//apellidos
function ValidarApellidos(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus Apellidos</li>";
    }else{
        error.style.display="none"
    }
}

//Correo
function ValidarCorreo(){
    if(txtCor.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su Correo</li>";
    }else{
        error.style.display="none"
    }
}

//sexo
function ValidarSexo(){
    if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false ){
        error.style.display="block";
        error.innerHTML+="<li>Por favor selecione su sexo</li>";
    }else{
        error.style.display="none"
    }
}

//Estado
function ValidarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor selecione el estado</li>";
    }else{
        error.style.display="none"
    }
}



//creamos un procedimiento para validar
function Validar(){
    //reiniciando el estilo error
    error.innerHTML="";
    //llamamos a los procedimientos
    ValidarNombre();
    ValidarApellidos();
    ValidarCorreo();
    ValidarSexo();
    ValidarEstado();
}

//creamos un procedimiento para asignar la clase error
function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

//creamos una funcion Registrar
function Registrar(){
    //reiniciamos el estilo error
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingrese tus nombres");
        LlamarClase("Por favor ingrese tus apellidos");
        LlamarClase("Por favor ingrese tu correo");
        LlamarClase("Por favor ingrese tu sexo");
        LlamarClase("Por favor ingrese tu estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingrese tus apellidos");
        LlamarClase("Por favor ingrese tu correo");
        LlamarClase("Por favor ingrese tu sexo");
        LlamarClase("Por favor ingrese tu estado");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingrese tu correo");
        LlamarClase("Por favor ingrese tu sexo");
        LlamarClase("Por favor ingrese tu estado");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        LlamarClase("Por favor ingrese tu sexo");
        LlamarClase("Por favor ingrese tu estado");
        rbMas.focus();
    }else if(txtEst.value=="" || txtEst.value==null){
        LlamarClase("Por favor ingrese tu estado");
        txtEst.focus();
    }else{
        alert:("Se registro Correctamente");
        error.innerHTML="";
    }
}