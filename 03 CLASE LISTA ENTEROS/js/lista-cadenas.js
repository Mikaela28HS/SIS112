class ListaEnteros {
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
        this.lista.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            listaElemento.appendChild(li);
        });
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
            this.actualizarLista();
        } else {
            alert('Número no encontrado.');
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
        this.actualizarLista();
    }
}

let miLista = new ListaCadenas();
miLista.agregar('Hola');
miLista.agregar('Mundo');
console.log(miLista.lista); // Imprime ['Hola', 'Mundo']