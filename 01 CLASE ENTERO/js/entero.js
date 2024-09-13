class Entero {
    //Atributos
    Num; 

    //Constructor = inicializa el objeto
    constructor(Numero) {
        this.Num = Numero;
    }

    // CLASS - Cargar el valor de Num
    setNum() {
        const input = document.getElementById('numeroInput');
        this.Num = parseInt(input.value, 10);
    }

    //CLASS - Obtener el valor de Num
    getNum() {
        return this.Num
    }

    //Mostrar el valor de Num
    showNum() {
        const resultado = document.getElementById('resultado');
        resultado.textContent = this.getNum();
    }

    showResultado(respuesta) {
        const resultado = document.getElementById('resultado');
        resultado.textContent = respuesta;
    }
    
    incrementarNum() {
        this.Num = this.Num + 1;
    }

    decrementarNum() {
        this.Num = this.Num-1;
    }

    esParImpar() {
        return (this.Num % 2 == 0)
    }

    esPositivoNegativo() {
        return (this.Num >= 0)
    }
        
}


//Las funciones = button HTML
var ClaseEntero = new Entero(0); //se inicializó en 0

//Crear objeto
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum() {
    ClaseEntero.showNum();
}

//Incrementar el valor de Num
function incrementarValor() {
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

//Decrementar el valor de Num
function decrementarValor() {
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

//Verifica si es par o impar
function esParImparNum() {
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par":"Es Num Impar";
    ClaseEntero.showResultado(resp);
}

//Verificar es positivo o negativo
function esPositivoNegativoNum() {
    var respuesta = ClaseEntero.esPositivoNegativo();
    var resp = respuesta ? "Es Num Positivo":"Es Num Negativo";
    ClaseEntero.showResultado(resp);
}