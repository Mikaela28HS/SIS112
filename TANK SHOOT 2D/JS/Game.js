class Game{
    ancho; 
    alto;
    cantColumnas; //Valores calculados a partir del "ancho"
    cantFilas; //Valores calculados a partir del "alto"
    anchoCelda;
    altoCelda;
    estadoJuego;

    constructor(_ancho, _alto, _estadiJuego){
        this.ancho = _ancho; //Valor del ancho ???
        this.alto = _alto; //Valor del alto ???
        this.estadoJuego = _estadiJuego;

        var utilsObj = new Utils();
        this.cantColumnas = CANT_COLUMNAS; 
        this.cantFilas = CANT_FILAS; 
        this.anchoCelda = utilsObj.Redondear(this.ancho / this.cantColumnas);
        this.altoCelda = utilsObj.Redondear(this.alto / this.cantFilas);

        console.log("cantColumnas", this.cantColumnas)
        console.log("cantFilas", this.cantFilas)

        console.log("anchoCelda", this.anchoCelda)
        console.log("altoCelda", this.altoCelda)
    }

    start(){
        //this.estadoJuego = "playing";
        //Iniciar otros elementos como tanques, puntuación. etc.
    }

    reset(){
        //this.estadoJuego = "reset";
        //Reiniciar
    }
    
}