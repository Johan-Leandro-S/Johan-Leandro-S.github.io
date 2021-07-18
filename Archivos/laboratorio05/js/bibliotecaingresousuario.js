var txtCor=document.getElementById("txtCor")
var txtCon=document.getElementById("txtCon")
var btnIngresar=document.getElementById("btnIngresar")
//creamos un procedimiento

function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

//creamos una funcion para validar el usuario
function validarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese su contraseña");
        txtCon.focus();
    }else{
        //capturando calores
        var cor=txtCor.value;
        var con=txtCon.value;
        //llamamos a la funcion de Firebase para crear usuarios
        auth.signInWithEmailAndPassword(cor, con)
    .then((userCredential) => {
      alert("Bienvenido al sistema");
      window.location="pagina11.html";
    })
    .catch((error) => {
      alert("Usuario o Contraseña no valida");
      Limpiar();
    });
    }
}
//llamamos al procedimiento
btnIngresar.addEventListener("click",validarUsuario)