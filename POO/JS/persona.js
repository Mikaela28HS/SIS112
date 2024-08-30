class Persona {
    constructor(nombre, edad, carrera, universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
    }
  
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre + '.'
    }
  
    cumpleanios() {
      return 'Tengo ' + this.edad + ' años.';
    }
  
    estudiar() {
      return 'Estudio ' + this.carrera;
    }
   
    Universidad() {
     return 'Estudio en la Universidad ' + this.universidad;
    }

    Cambiar_nombre() {
      this.nombre = prompt("Por favor escriba el nuevo nombre")
    while (this.edad = '  '){
      alert(" ")
    }
      return 'Hola, mi nombre es ' + this.nombre + '.'
    }

    Nueva_edad() {
      this.edad = prompt("¿Cuántos años tiene?");
    while (this.edad <= 0) {
        alert("La edad no puede ser un número negativo. Por favor, ingrese un valor válido.");
        this.edad = prompt("¿Cuántos años tiene?");
      }
      return 'Tengo ' + this.edad + ' años.';
    }

    Nueva_carrera() {
      this.carrera = prompt("¿Qué carrera estudias?")
      return 'Soy estudiante de la carrera de ' + this.carrera + '.'
    }

    Nueva_universidad(){
      this.universidad = prompt("¿En qué universidad estudias?")
      return 'Estudio en la Universidad ' + this.universidad + '.'
    }

    Eliminar_saludo() {
      return '  ';
    }
  
    Eliminar_edad() {
      return '   ';
    }

    Eliminar_carrera() {
      return '  ' ;
    }
    
    Eliminar_universidad() {
     return '  ' ;
    }

  }
  
  // Crear una instancia de la clase Persona
  const persona = new Persona( 'Mikaela' , 19, 'Ingeniería Industrial.', 'Católica Boliviana San Pablo.');
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad = document.getElementById('universidad');
  
  // Función para saludar
  function botonSaludar() {
    saludar.textContent = persona.saludar();
  }

  // Función para cumpleaños
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Función para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }

  // Función para universidad
  function botonUniversidad() {
    universidad.textContent = persona.Universidad();
  }

  // Función Cambiar nombre
  function botonCambiarnombre() {
    saludar.textContent = persona.Cambiar_nombre();
  }

  // Función Nueva edad
  function botonNuevaedad() {
    edad.textContent = persona.Nueva_edad();
  }

  // Función Nueva carrera
  function botonNuevacarrera() {
    carrera.textContent = persona.Nueva_carrera();
  }

  // Función Nueva universidad
  function botonNuevauniversidad(){
    universidad.textContent = persona.Nueva_universidad();
  }

  // Función Eliminar nombre
  function botonEliminarnombre(){
    saludar.textContent = persona.Eliminar_saludo();
  }

  // Función Eliminar edad
  function botonEliminaredad(){
    edad.textContent = persona.Eliminar_edad();
  }

  // Función Eliminar carrera
  function botonEliminarcarrera(){
    carrera.textContent = persona.Eliminar_carrera();
  }

  // Función Eliminar universidad
  function botonEliminaruniversidad(){
    universidad.textContent = persona.Eliminar_universidad();
  }