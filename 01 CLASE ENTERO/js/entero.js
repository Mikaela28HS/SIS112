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

    // Calcular el factorial de Num
    factorial() {
        if (this.Num < 0) return "Factorial no está definido para números negativos";
        let fact = 1;
        for (let i = 1; i <= this.Num; i++) {
            fact *= i;
        }
        return `El factorial de ${this.Num} es ${fact}`;
    }

    // Verifica si Num es un número perfecto
    esPerfecto() {
        if (this.Num <= 0) return `${this.Num} no es un número perfecto`;

        let sumaDivisores = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                sumaDivisores += i;
            }
        }

        return sumaDivisores === this.Num ? `${this.Num} es un número perfecto`
             : `${this.Num} no es un número perfecto`;
    }
        
    // Número de Armstrong
    esArmstrong() {
        let sumaCubos = 0;
        let numStr = this.Num.toString();
        for (let i = 0; i < numStr.length; i++) {
            sumaCubos += Math.pow(parseInt(numStr[i]), 3);
        }
        return sumaCubos === this.Num ? `${this.Num} es un número de Armstrong` : `${this.Num} no es un número de Armstrong`;
    }

    // Números Perfectos Generalizados
    esPerfectoGeneralizado(k) {
        if (this.Num <= 0) return `${this.Num} no es un número perfecto generalizado`;

        let sumaPotencias = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                sumaPotencias += Math.pow(i, k);
            }
        }
        return sumaPotencias === this.Num ? `${this.Num} es un número perfecto generalizado con k=${k}` : `${this.Num} no es un número perfecto generalizado con k=${k}`;
    }

    // Triángulo de Pascal
    calcularFilaPascal() {
        let fila = [1];
        for (let i = 1; i <= this.Num; i++) {
            fila[i] = fila[i - 1] * (this.Num - i + 1) / i;
        }
        return `La fila ${this.Num} del triángulo de Pascal es: [${fila.join(", ")}]`;
    }

    // Cifrado César
    cifrarCesar(desplazamiento) {
        let texto = this.Num.toString();
        let cifrado = '';
        for (let i = 0; i < texto.length; i++) {
            let charCode = texto.charCodeAt(i);
            if (charCode >= 48 && charCode <= 57) { // números 0-9
                let nuevoCharCode = ((charCode - 48 + desplazamiento) % 10) + 48;
                cifrado += String.fromCharCode(nuevoCharCode);
            } else {
                cifrado += texto[i]; // dejar cualquier otro caracter sin cifrar
            }
        }
        return `El número ${this.Num} cifrado con César es: ${cifrado}`;
    }

    // Primos Gemelos
    tienePrimoGemelo() {
        function esPrimo(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }

        if (!esPrimo(this.Num)) return `${this.Num} no es un número primo`;

        const gemelo1 = this.Num - 2;
        const gemelo2 = this.Num + 2;
        if (esPrimo(gemelo1)) return `${this.Num} tiene un primo gemelo: ${gemelo1}`;
        if (esPrimo(gemelo2)) return `${this.Num} tiene un primo gemelo: ${gemelo2}`;
        return `${this.Num} no tiene primos gemelos`;
    }

    // Descomposición en Factores Primos
    descomponerEnFactoresPrimos() {
        let num = this.Num;
        let factores = {};
        for (let i = 2; i <= num; i++) {
            while (num % i === 0) {
                factores[i] = (factores[i] || 0) + 1;
                num /= i;
            }
        }
        let resultado = Object.entries(factores).map(([factor, potencia]) => `${factor}^${potencia}`).join(" * ");
        return `La descomposición en factores primos de ${this.Num} es: ${resultado}`;
    }

    // Números de Catalan
    calcularCatalan() {
        function factorial(n) {
            let fact = 1;
            for (let i = 1; i <= n; i++) fact *= i;
            return fact;
        }

        let catalan = factorial(2 * this.Num) / (factorial(this.Num + 1) * factorial(this.Num));
        return `El número de Catalan para ${this.Num} es: ${catalan}`;
    }

    // Número de Mersenne
    esMersenne() {
        function esPrimo(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }

        let p = Math.log2(this.Num + 1);
        if (Number.isInteger(p) && esPrimo(p)) {
            return `${this.Num} es un número de Mersenne porque 2^${p} - 1 = ${this.Num}`;
        }
        return `${this.Num} no es un número de Mersenne`;
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

// Calcular factorial
function calcularFactorial() {
    var respuesta = ClaseEntero.factorial();
    ClaseEntero.showResultado(respuesta);
}

// Verificar si es un número perfecto
function verificarPerfecto() {
    var respuesta = ClaseEntero.esPerfecto();
    ClaseEntero.showResultado(respuesta);
}

// Función para verificar si el número es un número de Armstrong
function verificarArmstrong() {
    var respuesta = ClaseEntero.esArmstrong();
    ClaseEntero.showResultado(respuesta);
}

// Función para verificar si el número es un número perfecto generalizado con un exponente k
function verificarPerfectoGeneralizado() {
    var exponente = prompt("Ingrese el valor de k:");
    var respuesta = ClaseEntero.esPerfectoGeneralizado(parseInt(exponente));
    ClaseEntero.showResultado(respuesta);
}

// Función para calcular la fila del triángulo de Pascal
function calcularFilaTrianguloPascal() {
    var respuesta = ClaseEntero.calcularFilaPascal();
    ClaseEntero.showResultado(respuesta);
}

// Función para cifrar el número con el cifrado César
function cifrarNumeroCesar() {
    var desplazamiento = prompt("Ingrese el desplazamiento para el cifrado César:");
    var respuesta = ClaseEntero.cifrarCesar(parseInt(desplazamiento));
    ClaseEntero.showResultado(respuesta);
}

// Función para verificar si el número tiene un primo gemelo
function verificarPrimoGemelo() {
    var respuesta = ClaseEntero.tienePrimoGemelo();
    ClaseEntero.showResultado(respuesta);
}

// Función para descomponer el número en factores primos
function descomponerFactoresPrimos() {
    var respuesta = ClaseEntero.descomponerEnFactoresPrimos();
    ClaseEntero.showResultado(respuesta);
}

// Función para calcular el número de Catalan
function calcularNumeroCatalan() {
    var respuesta = ClaseEntero.calcularCatalan();
    ClaseEntero.showResultado(respuesta);
}

// Función para verificar si el número es un número de Mersenne
function verificarNumeroMersenne() {
    var respuesta = ClaseEntero.esMersenne();
    ClaseEntero.showResultado(respuesta);
}