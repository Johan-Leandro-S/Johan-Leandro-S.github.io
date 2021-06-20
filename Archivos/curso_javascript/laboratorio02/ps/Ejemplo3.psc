Algoritmo Ejemplo3
	//definiendo variables
	Definir pre, sbt, igv, tot Como Real;
	Definir can Como Entero;
	//inicializando cariables
	pre=0; sbt=0; igv=0; tot=0;
	//capturando valores
	Escribir "Ingresar el precio del producto: ";
	Leer pre;
	Escribir "Ingresa la cantidad a comprar del producto: ";
	leer can;
	//realizando operaciones
	sbt=pre*can;
	igv=sbt*0.18;
	tot=sbt+igv;
	//mostrando resultado
	Escribir "El subtotal es: ",sbt;
	Escribir "El igv es: ",igv;
	Escribir "El total es: ",tot;
	
FinAlgoritmo
