class Materia {
    constructor(nombreMateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadinscritos ) {
      this.nombreMateria = nombreMateria;
      this.sigla = sigla;
      this.docente = docente;
      this.horarios = horarios;
      this.aula = aula;
      this.prerequisito = prerequisito;
      this.carrera = carrera;
      this.universidad = universidad;
      this.cantidadinscritos = cantidadinscritos;
    }
  
    //CREAR MATERIA
    Asignatura() {
      return 'Hola, curso la materia de: ' + this.nombreMateria;
    }
  
    Siglas() {
      return 'La cual tiene las siglas: ' + this.sigla;
    }
  
    Docente() {
      return 'La materia es dada por: ' + this.docente;
    }
   
    Horarios() {
      return 'La materia es en los horarios: ' + this.horarios;
    }

    Aula() {
      return 'La clase es en el aula: ' + this.aula;
    }

    Prerequisito() {
      return 'Esta materia tiene como prerequisito haber vencido la materia de: ' + this.prerequisito;
    }

    Carrera() {
      return 'Esta materia pertenece a la carrera de: ' + this.carrera;
    }

    Universidad() {
     return 'Esta materia pertenece a la Universidad ' + this.universidad;
    }

    CantidadInscritos() {
      return 'Esta materia tiene ' + this.cantidadinscritos + ' inscritos.'
    }

    //Modificar 
    Modificar_Asignatura() {
      this.nombreMateria = prompt("Por favor ingrese el nombre de la materia");
      if (!this.nombreMateria) {
        alert("Debe ingresar un nombre de materia válido");
        return;
      }
      return 'Hola, curso la materia de: ' + this.nombreMateria + '.';
    }

    Modificar_Siglas() {
      this.sigla = prompt("Ingrese la sigla de la materia, por favor: ")
      return 'La cual tiene las siglas: ' + this.sigla;
    }
    
    Modificar_Docente() {
      this.docente = prompt("Por favor ingrese el nombre del docente que da la materia ")
      return 'La materia es dada por: ' + this.docente;
    }   

    Modificar_Horarios() {
      this.horarios = prompt("Ingrese los horarios de la materia, en este formato LUN 7-9 AM ")
      return 'La materia es en los horarios: ' + this.horarios;
    }

    Modificar_Aula() { 
      this.aula = prompt("Ingrese el aula en donde se da la clase ")
      return 'La clase es en el aula: ' + this.aula;
    }

    Modificar_Prerequisito() { 
      this.prerequisito = prompt("Ingrese la materia que debió vencer para poder inscribir la materia ")
      return 'Esta materia tiene como prerequisito haber vencido la materia de: ' + this.prerequisito;
    }

    Modificar_Carrera() { 
      this.carrera = prompt("Ingrese la carrera a la que pertenece esta materia ")
      return 'Esta materia pertenece a la carrera de: ' + this.carrera
    }
    
    Modificar_Universidad() { 
      this.universidad = prompt("Ingrese la universidad a la cual pertenece la materia ")
      return 'Esta materia pertenece a la Universidad ' + this.universidad;
    }

    Modificar_CantidadInscritos(){
      this.cantidadinscritos = prompt("¿Cuántos inscritos hay en la materia?")
      return 'Esta materia tiene ' + this.cantidadinscritos + ' inscritos.'
    }

    //Eliminar
    Eliminar_Asignatura() {
      return '  ';
    }
  
    Eliminar_Siglas() {
      return '   ';
    }

    Eliminar_Docente() {
      return '  ' ;
    }
    
    Eliminar_Horarios() {
     return '  ' ;
    }

    Eliminar_Aula() {
      return '  ' ;
    }
     
    Eliminar_Prerequisito() {
      return '  ' ;
    }

    Eliminar_Carrera() {
      return '  ' ;
    }

    Eliminar_Universidad() {
      return '  ' ;
    }

    Eliminar_CantidadInscritos() { 
      return '  ' ;
    }
  }
  
  // Crear una instancia de Materias
  const materias = {
    Calculo: new Materia('CÁLCULO I', 'MAT-132', 'ASPIAZU MELGAR VICTOR HUGO', 'Lunes 7:30-9, Miercoles 7:30-9', '10A-N4', 'MATEMÁTICA BÁSICA', 'Ingeniería Industrial', 'UCB', 33),
    Antropologia: new Materia('ANTROPOLOGÍA Y VALORES', 'FHC-101', 'DE LA BARRA BARRA EXALTA GABRIELA', 'Martes 9:10-10:40, Jueves 9:10-10:40', '4A-N3, B2-1', 'Pensamiento Crítico', 'Ingeniería Industrial', 'UCB', 62),
    Fisica: new Materia('FÍSICA I Y LABORATORIO', 'FIS-111', 'LOBO LIMPIAS VICTOR HUGO', 'Lunes 9:10-10:40, Miercoles 9:10-10:40', 'E2-5', 'NINGUNA', 'Ingeniería Industrial', 'UCB', 45),
    LabFisica: new Materia('FÍSICA I Y LABORATORIO', 'FIS-111', 'ALVAREZ CABALLERO ROBERTO CARLOS', 'Miercoles 10:50-12:20', 'F1-2 ', 'NINGUNA', 'Ingeniería Industrial', 'UCB', 15),
    Manufactura: new Materia('MANUFACTURA Y MECANIZADO', 'IND-112', 'SALVATIERRA ARANCIBIA JORGE ENRIQUE', 'Martes-Jueves-Viernes 07:30-9', '12A-N4, F1-2', 'INTRODUCCIÓN AL DISEÑO INDUSTRIAL', 'Ingeniería Industrial', 'UCB', 14),
    Probabilidad: new Materia('PROBABILIDAD Y ESTADÍSTICA I', 'MAT-142', 'BARCA MAGARZO CARMEN SILVIA', 'Martes-Jueves 10:50-12:20', 'D2-1', 'NINGUNO', 'Ingeniería Industrial', 'UCB', 33),
    Programacion: new Materia('PROGRAMACIÓN I', 'SIS-112', 'ESCALANTE USTARIZ EDDY', 'Lunes 10:50-12:20, Viernes 9:10-11:35', 'C2-2', 'INTRODUCCIÓN A LA PROGRAMACIÓN', 'Ingeniería Industrial', 'UCB', 15),
  };
  

  // Función para actualizar la materia seleccionada
  function actualizarMateria() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];

    document.getElementById('nombreMateria').textContent = materiaSeleccionada.Asignatura();
    document.getElementById('sigla').textContent = materiaSeleccionada.Siglas();
    document.getElementById('docente').textContent = materiaSeleccionada.Docente();
    document.getElementById('horarios').textContent = materiaSeleccionada.Horarios();
    document.getElementById('aula').textContent = materiaSeleccionada.Aula();
    document.getElementById('prerequisito').textContent = materiaSeleccionada.Prerequisito();
    document.getElementById('carrera').textContent = materiaSeleccionada.Carrera();
    document.getElementById('universidad').textContent = materiaSeleccionada.Universidad();
    document.getElementById('cantidadinscritos').textContent = materiaSeleccionada.CantidadInscritos();
  }

  // Botones de modificar
  function botonModificarAsignatura() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('nombreMateria').textContent = materiaSeleccionada.Modificar_Asignatura();
  }

  function botonModificarSiglas() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('sigla').textContent = materiaSeleccionada.Modificar_Siglas();
  }

  function botonModificarDocente() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('docente').textContent = materiaSeleccionada.Modificar_Docente();
  }

  function botonModificarHorarios() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('horarios').textContent = materiaSeleccionada.Modificar_Horarios();
  }

  function botonModificarAula() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('aula').textContent = materiaSeleccionada.Modificar_Aula();
  }

  function botonModificarPrerequisito() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('prerequisito').textContent = materiaSeleccionada.Modificar_Prerequisito();
  }

  function botonModificarCarrera() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('carrera').textContent = materiaSeleccionada.Modificar_Carrera();
  }

  function botonModificarUniversidad() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('universidad').textContent = materiaSeleccionada.Modificar_Universidad();
  }

  function botonModificarCantidadInscritos() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('cantidadinscritos').textContent = materiaSeleccionada.Modificar_CantidadInscritos();
  }

  // Botones de eliminar
  function botonEliminarAsignatura() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('nombreMateria').textContent = materiaSeleccionada.Eliminar_Asignatura();
  }

  function botonEliminarSiglas() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('sigla').textContent = materiaSeleccionada.Eliminar_Siglas();
  }

  function botonEliminarDocente() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('docente').textContent = materiaSeleccionada.Eliminar_Docente();
  }

  function botonEliminarHorarios() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('horarios').textContent = materiaSeleccionada.Eliminar_Horarios();
  }

  function botonEliminarAula() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('aula').textContent = materiaSeleccionada.Eliminar_Aula();
  }

  function botonEliminarPrerequisito() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('prerequisito').textContent = materiaSeleccionada.Eliminar_Prerequisito();
  }

  function botonEliminarCarrera() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('carrera').textContent = materiaSeleccionada.Eliminar_Carrera();
  }

  function botonEliminarUniversidad() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('universidad').textContent = materiaSeleccionada.Eliminar_Universidad();
  }

  function botonEliminarCantidadInscritos() {
    const select = document.getElementById('materia-select').value;
    const materiaSeleccionada = materias[select];
    document.getElementById('cantidadinscritos').textContent = materiaSeleccionada.Eliminar_CantidadInscritos();
  }
