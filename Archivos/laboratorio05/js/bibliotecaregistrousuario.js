//declarando variables para los controles
var txtcor=document.getElementById("txtCor")
var txtcon=document.getElementById("txtCon")
var btnRegistrar=document.getElementById("btnRegistrar")

//creamos funcion para limpiar
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

//crenais un oricedumu
function RegistrarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
    alert("Ingrese el correo");
    txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
    alert("Ingrese la contraseña");
    txtCon.focus();
    }else{
        //capturando calores
    var cor=txtCor.value;
    var con=txtCon.value;
    //llamamos a la funcion de Firebase para crear usuarios
    auth.createUserWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    // Signed in
    alert("Se registro el usuario en Firebase");
    Limpiar();
  })
  .catch((error) => {
    alert("No se pudo registrar el usuario en Firebase");
    Limpiar();
  });
    }
}

//llamamos al procedimiento en el boton
btnRegistrar.addEventListener("click",RegistrarUsuario);
