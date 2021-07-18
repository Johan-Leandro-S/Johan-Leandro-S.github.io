//crear un vector que contenga la imfomacion del registro
var producto=[];
//creamos un procedimiento para poder registrar
function Registrar(nomproducto,catproducto,preproducto,canproducto){
    var Nuevoproducto={
        nombre:nomproducto,
        categoria:catproducto,
        precio:preproducto,
        cantidad:canproducto
    };
    producto.push(Nuevoproducto);
}

//creamos una funcion para mostrar la informacion del registro
function Mostrar(){
    return producto;
}