class Cadena {
    constructor(cadena) {
      this.cadena = cadena;
    }
  
    getCadena() { //Obtiene el valor asignado a la cadena
      return this.cadena;
    }
  
    // Manipulación de cadenas
    concatenar(otraCadena) {  //Unir una cadena con otra
      this.cadena += otraCadena;
    }
  
    invertir() { //Invertir los caracteres de la cadena
      let cadenaInvertida = '';
      for (let i = this.cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += this.cadena[i];
      }
      this.cadena = cadenaInvertida;
    }
  
    // Comparaciones
    esVacia() { //Compara si la cadena no tiene caracteres
      return this.cadena.length === 0;
    }
  
    contiene(subcadena) { //Compara si la subCadena existe dentro de la cadena
      return this.cadena.includes(subcadena);
    }
  
    comienzaCon(prefijo) { //Compara si la cadena comienza con el prefijo "caracter"
      return this.cadena.startsWith(prefijo);
    }
  
    terminaCon(sufijo) { //Compara si la cadena termina con el sufijo "caracter"
      return this.cadena.endsWith(sufijo);
    }
  
    // Otras operaciones
    longitud() { //Obtiene la cantidad de caracteres que tiene la cadena
      return this.cadena.length;
    }
  
    aMayusculas() { //Obtiene la cadena transformada en MAYUSCULA
      return this.cadena.toUpperCase();
    }
  
    aMinusculas() { //Obtiene la cadena transformada en minuscula
      return this.cadena.toLowerCase();
    }

    // 1. Transformación de números a números romanos
    static aNumeroRomano(numero) {
      const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      const simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
      let resultado = '';

      for (let i = 0; i < valores.length; i++) {
          while (numero >= valores[i]) {
              resultado += simbolos[i];
              numero -= valores[i];
          }
      }
      return resultado;
    }

    // 2. Generación de texto aleatorio
    static generarTextoAleatorio(palabras) {
      const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let resultado = '';
      for (let i = 0; i < palabras; i++) {
          let palabra = '';
          const longitud = Math.floor(Math.random() * 5) + 3; // Palabras de 3 a 7 caracteres
          for (let j = 0; j < longitud; j++) {
              palabra += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
          }
          resultado += palabra + ' ';
      }
      return resultado.trim();
    }

    // 3. Transformación de ASCII a Texto
    static asciiATexto(num) {
        if (num < 0 || num > 127) {
          throw new Error("El número debe estar entre 0 y 127.");
        }
      return String.fromCharCode(num); // Convierte el número a su representación ASCII
    }
  }
  
  let cadena = new Cadena('');
  
  function ejecutar(metodo) {
    const input = document.getElementById('inputCadena');
    const resultadoDiv = document.getElementById('resultado');
    const valorInput = input.value;
  
    switch (metodo) {
      case 'getCadena':
        resultadoDiv.innerHTML = `Cadena: ${cadena.getCadena()}`;
        break;
      case 'concatenar':
        cadena.concatenar(valorInput);
        resultadoDiv.innerHTML = `Cadena actual: ${cadena.getCadena()}`;
        break;
      case 'invertir':
        cadena.invertir();
        resultadoDiv.innerHTML = `Cadena invertida: ${cadena.getCadena()}`;
        break;
      case 'esVacia':
        resultadoDiv.innerHTML = `¿Es vacía?: ${cadena.esVacia()}`;
        break;
      case 'contiene':
        resultadoDiv.innerHTML = `¿Contiene '${valorInput}'?: ${cadena.contiene(valorInput)}`;
        break;
      case 'comienzaCon':
        resultadoDiv.innerHTML = `¿Comienza con '${valorInput}'?: ${cadena.comienzaCon(valorInput)}`;
        break;
      case 'terminaCon':
        resultadoDiv.innerHTML = `¿Termina con '${valorInput}'?: ${cadena.terminaCon(valorInput)}`;
        break;
      case 'longitud':
        resultadoDiv.innerHTML = `Longitud: ${cadena.longitud()}`;
        break;
      case 'aMayusculas':
        resultadoDiv.innerHTML = `A mayúsculas: ${cadena.aMayusculas()}`;
        break;
      case 'aMinusculas':
        resultadoDiv.innerHTML = `A minúsculas: ${cadena.aMinusculas()}`;
        break;
        case 'aNumeroRomano':
          resultadoDiv.innerHTML = `Número Romano: ${Cadena.aNumeroRomano(parseInt(valorInput))}`;
          break;
      case 'generarTextoAleatorio':
          resultadoDiv.innerHTML = `Texto Aleatorio: ${Cadena.generarTextoAleatorio(parseInt(valorInput))}`;
          break;
      case 'asciiATexto':
          resultadoDiv.innerHTML = `Texto ASCII: ${Cadena.asciiATexto(parseInt(valorInput))}`;
          break;
      default:
        resultadoDiv.innerHTML = 'Método no reconocido.';
    }
}