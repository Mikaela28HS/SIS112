class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
        this.actualizarLista();
    }

    actualizarLista() {
        const listaElemento = document.getElementById('lista');
        listaElemento.innerHTML = '';
        this.lista.forEach(cadena => {
            const li = document.createElement('li');
            li.textContent = cadena;
            listaElemento.appendChild(li);
        });
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
            this.actualizarLista();
        } else {
            alert('Cadena no encontrada.');
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort(); // Ordenar cadenas alfabéticamente
        this.actualizarLista();
    }
}
/*
let miLista = new ListaCadenas();
miLista.agregar('Hola');
miLista.agregar('Mundo');
miLista.agregar('UCB');

//Retornar la cadena con mayor caracteres

//var = let
//--------------------------------Hola
var a = miLista.lista[0]
console.log(a);
var aCant = a.length;
console.log(aCant);
//--------------------------------Mundo
var b = miLista.lista[1]
console.log(b);
var bCant = b.length;
console.log(bCant);
//--------------------------------UCB
var c = miLista.lista[2]
console.log(c);
var cCant = c.length;
console.log(cCant);
//--------------------------------Buscar el mayor
var mayor = 0;
var posición = -1;
if (aCant > mayor) {
    mayor = aCant;
    posición = 0;
}
//------
if (bCant > mayor) {
    mayor = bCant;
    posición = 1;
}
//-----
if (cCant > mayor) {
    mayor = cCant;
    posición = 2;
}
//------
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posición]);
*/

//REALIZAR EL MISMO EJERCICIO UTILIZANDO UN FOR
let miLista = new ListaCadenas();
miLista.agregar('Hola');
miLista.agregar('Mundo');
miLista.agregar('UCB SCZ INDUSTRIAL');

// Retornar la cadena con mayor caracteres
let mayor = 0;
let posicion = -1;

// Recorremos la lista para encontrar la cadena con más caracteres
for (let i = 0; i < miLista.lista.length; i++) {
    let cadena = miLista.lista[i];
    console.log(cadena);
    let cant = cadena.length;
    console.log(cant);
    
    if (cant > mayor) {
        mayor = cant;
        posicion = i;
    }
}

console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);



console.log(miLista.lista); //Imprime: ['Hola', 'Mundo', 'UCB']
function agregar() {
    const valor = document.getElementById('cadena').value;
    if (valor) {
        miLista.agregar(valor);
        document.getElementById('cadena').value = '';
    } else {
        alert('Por favor, ingresa una cadena.');
    }
}

function eliminar() {
    const valor = document.getElementById('cadenaEliminar').value;
    miLista.eliminar(valor);
    document.getElementById('cadenaEliminar').value = '';
}

function ordenar() {
    miLista.ordenar();
}

function buscar() {
    const valor = document.getElementById('cadenaBuscar').value;
    const index = miLista.buscar(valor);
    if (index !== -1) {
        alert(`Cadena encontrada en la posición: ${index}`);
    } else {
        alert('Cadena no encontrada.');
    }
}
