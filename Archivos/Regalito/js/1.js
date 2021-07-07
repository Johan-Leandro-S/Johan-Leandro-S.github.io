//creamos una funcion para cuando cargue el documento
function Cargar(url,titulo,ancho,alto){
    //declaramos cariables para calcular el ancho y alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;

    //declarando variables para la posicion
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);

    window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+",top="+y+", scrollbars=No");
}
//llamamos a la funcion cargar
window.onload=Cargar("VentanitauWu.html","Ventana Emergente",400,400);
window.onload=Cargar("VentanitauWu2.html","Ventana Emergente 2",400,400);
window.onload=Cargar("VentanitauWu3.html","Ventana Emergente 3",400,400);
window.onload=Cargar("VentanitauWu4.html","Ventana Emergente 4",400,400);
window.onload=Cargar("VentanitauWu5.html","Ventana Emergente 5",400,400);
window.onload=Cargar("VentanitauWu6.html","Ventana Emergente 6",400,400);
