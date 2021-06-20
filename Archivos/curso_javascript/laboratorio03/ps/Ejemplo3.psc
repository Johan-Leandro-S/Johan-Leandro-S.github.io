Algoritmo Ejemplo3
	//definiendo variables
	definir n1,n2,prom como real;
	definir men como texto;
	//inicializando calores
	n1=0; n2=0; prom=0; men="";
	//capturando valores
	escribir "ingrese la nota 1:";
	Leer n1;
	escribir "ingrese la nota 2:";
	Leer n2;
	//realizando operaciones
	prom=(n1+n2)/2;
	si (prom>=13) Entonces;
		men="Aprobado";
	FinSi
	//mostrando resultados
	Escribir "el promedio es : ",prom;
	escribir men;
FinAlgoritmo
