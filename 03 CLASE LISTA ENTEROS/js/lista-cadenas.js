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

let miLista = new ListaCadenas();

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
