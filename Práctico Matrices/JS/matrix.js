class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // = es asignar, == y === es comparar

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }

    llenarMatrizCuadradoRelleno() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1; // Rellenar con 1
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizMarcoInterno() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 0; // Marco exterior con 0
                } else {
                    this.matriz[i][j] = 1; // Interior con 1
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizCruces() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === Math.floor(this.filas / 2) || j === Math.floor(this.columnas / 2)) {
                    this.matriz[i][j] = 1; // Fila y columna central con 1
                } else {
                    this.matriz[i][j] = 0; // El resto con 0
                }
            }
        }
        this.dibujarMatriz();
    }
    
    /*
    llenarMatrizBordesYDiagonales() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1; // Bordes con 1
                } else if (i === j || i + j === this.columnas - 1) {
                    this.matriz[i][j] = 2; // Diagonales con 2
                } else {
                    this.matriz[i][j] = 0; // El resto con 0
                }
            }
        }
        this.dibujarMatriz();
    }
    */

    llenarMatrizBordesYDiagonales() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 0;
                } else if (i === j || i + j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizBandera() {
        const tercio = Math.floor(this.filas / 3);
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i < tercio) {
                    this.matriz[i][j] = 1; // Primera franja con 1
                } else if (i < 2 * tercio) {
                    this.matriz[i][j] = 2; // Segunda franja con 2
                } else {
                    this.matriz[i][j] = 0; // Tercera franja con 0
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizRellenoAlterno() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 2 === 0 ? 1 : 0; // Fila par con 1, fila impar con 0
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizZigZagHorizontal() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j === i) {
                    this.matriz[i][j] = 1; // Crear línea en zig-zag con 1
                } else {
                    this.matriz[i][j] = 0; // El resto con 0
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizEspiral() {
        let left = 0, right = this.columnas - 1, top = 0, bottom = this.filas - 1;
        let value = 1;
        while (left <= right && top <= bottom) {
            // Llenar la parte superior
            for (let i = left; i <= right; i++) this.matriz[top][i] = value;
            top++;
            // Llenar el lado derecho
            for (let i = top; i <= bottom; i++) this.matriz[i][right] = value;
            right--;
            // Llenar la parte inferior
            for (let i = right; i >= left; i--) this.matriz[bottom][i] = value;
            bottom--;
            // Llenar el lado izquierdo
            for (let i = bottom; i >= top; i--) this.matriz[i][left] = value;
            left++;
        }
        this.dibujarMatriz();
    }
    

    llenarMatrizTrianguloSuperiorIzquierdo() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[i][j] = 1; // Rellenar con 1 en la mitad superior izquierda
            }
            for (let j = i + 1; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // El resto con 0
            }
        }
        this.dibujarMatriz();
    }
    
    llenarMatrizTrianguloInferiorDerecho() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j >= this.columnas - i - 1) {
                    this.matriz[i][j] = 1; // Rellenar con 1 en la mitad inferior derecha
                } else {
                    this.matriz[i][j] = 0; // El resto con 0
                }
            }
        }
        this.dibujarMatriz();
    }
    
    llenarMatrizCuadricula() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) {
                    this.matriz[i][j] = 1; // Rellenar filas pares con 1
                } else {
                    // Rellenar filas impares con 1 en los bordes
                    this.matriz[i][j] = (j === 0 || j === this.columnas - 1) ? 1 : 0;
                }
            }
        }
        this.dibujarMatriz();
    }
    
    llenarMatrizTrianguloCentral() {
        this.vaciarMatriz();
        const centro = Math.floor(this.columnas / 2);

        for (let i = 1; i <= 5; i++) { 
            for (let j = centro - i + 1; j <= centro + i - 1; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizRombosConcentricos() {
        this.vaciarMatriz(); 

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1;
            }
        }
        
        const tamRombo = 3; // Tamaño del rombo desde la esquina hacia el centro
        
        // Dibuja rombo en la esquina superior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][j] = 0; // Cambia la zona del rombo a 0
                this.matriz[j][i] = 0;
            }
        }
        
        // Dibuja rombo en la esquina superior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][this.columnas - 1 - j] = 0;
                this.matriz[j][this.columnas - 1 - i] = 0;
            }
        }
        
        // Dibuja rombo en la esquina inferior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][j] = 0;
                this.matriz[this.filas - 1 - j][i] = 0;
            }
        }
        
        // Dibuja rombo en la esquina inferior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 0;
                this.matriz[this.filas - 1 - j][this.columnas - 1 - i] = 0;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizCrucesConcentricas() {
        const centro = Math.floor(this.columnas / 2);
        for (let distancia = 0; distancia <= centro; distancia += 2) {
            for (let i = centro - distancia; i <= centro + distancia; i++) {
                if (i >= 0 && i < this.columnas) {
                    this.matriz[centro - distancia][i] = 1; // Fila superior de la cruz
                    this.matriz[centro + distancia][i] = 1; // Fila inferior de la cruz
                    this.matriz[i][centro - distancia] = 1; // Columna izquierda de la cruz
                    this.matriz[i][centro + distancia] = 1; // Columna derecha de la cruz
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizBanderaDiagonal() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j <= i) {
                    this.matriz[i][j] = 1; // Parte superior izquierda con 1
                } else {
                    this.matriz[i][j] = 0; // Parte inferior derecha con 0
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizCuadradoDentroCuadrado() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Bordes externos
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // Cuadrado interno de "2"
                else if ((i >= 2 && i <= this.filas - 3) && (j >= 2 && j <= this.columnas - 3)) {
                    // Bordes del cuadrado interno
                    if (i === 2 || i === this.filas - 3 || j === 2 || j === this.columnas - 3) {
                        this.matriz[i][j] = 2;
                    } else {
                        // Centro vacío del cuadrado interno
                        this.matriz[i][j] = 0;
                    }
                }
                // Resto del área intermedia
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }


    llenarMatrizBordesCentro() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (i >= 3 && i <= 6 && j >= 3 && j <= 6) {
                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizLineasParalelas() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) {
                    this.matriz[i][j] = 1;
                } else {
                    if (j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;
                    }
                }
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizMarcasCruz() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = (i % 4 === j % 4) ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizRomboEsquinas() {
        this.vaciarMatriz();
        const tamRombo = 3; // Tamaño del rombo desde la esquina hacia el centro
        // Dibuja rombo en la esquina superior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][j] = 1;
                this.matriz[j][i] = 1;
            }
        }
        // Dibuja rombo en la esquina superior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][this.columnas - 1 - j] = 1;
                this.matriz[j][this.columnas - 1 - i] = 1;
            }
        }
        // Dibuja rombo en la esquina inferior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][j] = 1;
                this.matriz[this.filas - 1 - j][i] = 1;
            }
        }
        // Dibuja rombo en la esquina inferior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1;
                this.matriz[this.filas - 1 - j][this.columnas - 1 - i] = 1;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizAjedrez() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = (i + j) % 2 === 0 ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizRelojDeArena() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j >= i && j < this.columnas - i || j >= this.columnas - i - 1 && j <= i) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }
    //-------------------------------------

    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#322d2d"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#892020"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#d6cdcd"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }

}
