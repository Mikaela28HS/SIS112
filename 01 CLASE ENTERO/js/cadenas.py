class Cadena:
    def __init__(self, cadena):
        self.cadena = cadena

    # Obtener la cadena
    def get_cadena(self):
        return self.cadena

    # Concatenar otra cadena
    def concatenar(self, otra_cadena):
        self.cadena += otra_cadena

    # Invertir la cadena
    def invertir(self):
        self.cadena = self.cadena[::-1]

    # Verificar si es vacía
    def es_vacia(self):
        return len(self.cadena) == 0

    # Verificar si contiene una subcadena
    def contiene(self, subcadena):
        return subcadena in self.cadena

    # Verificar si comienza con un prefijo
    def comienza_con(self, prefijo):
        return self.cadena.startswith(prefijo)

    # Verificar si termina con un sufijo
    def termina_con(self, sufijo):
        return self.cadena.endswith(sufijo)

    # Obtener la longitud de la cadena
    def longitud(self):
        return len(self.cadena)

    # Convertir a mayúsculas
    def a_mayusculas(self):
        return self.cadena.upper()

    # Convertir a minúsculas
    def a_minusculas(self):
        return self.cadena.lower()

# Crear una instancia de la clase Cadena
cadena = Cadena('')

# Función para ejecutar el método correspondiente
def ejecutar(metodo, valor_input=''):
    resultado = ''

    if metodo == 'get_cadena':
        resultado = f"Cadena: {cadena.get_cadena()}"
    elif metodo == 'concatenar':
        cadena.concatenar(valor_input)
        resultado = f"Cadena actual: {cadena.get_cadena()}"
    elif metodo == 'invertir':
        cadena.invertir()
        resultado = f"Cadena invertida: {cadena.get_cadena()}"
    elif metodo == 'es_vacia':
        resultado = f"¿Es vacía?: {cadena.es_vacia()}"
    elif metodo == 'contiene':
        resultado = f"¿Contiene '{valor_input}'?: {cadena.contiene(valor_input)}"
    elif metodo == 'comienza_con':
        resultado = f"¿Comienza con '{valor_input}'?: {cadena.comienza_con(valor_input)}"
    elif metodo == 'termina_con':
        resultado = f"¿Termina con '{valor_input}'?: {cadena.termina_con(valor_input)}"
    elif metodo == 'longitud':
        resultado = f"Longitud: {cadena.longitud()}"
    elif metodo == 'a_mayusculas':
        resultado = f"A mayúsculas: {cadena.a_mayusculas()}"
    elif metodo == 'a_minusculas':
        resultado = f"A minúsculas: {cadena.a_minusculas()}"
    else:
        resultado = 'Método no reconocido.'

    return resultado

# Ejemplo de uso
print(ejecutar('concatenar', 'Hola'))
print(ejecutar('concatenar', ' Mundo'))
print(ejecutar('invertir'))
print(ejecutar('es_vacia'))
print(ejecutar('contiene', 'Hola'))
print(ejecutar('comienza_con', 'H'))
print(ejecutar('termina_con', 'o'))
print(ejecutar('longitud'))
print(ejecutar('a_mayusculas'))
print(ejecutar('a_minusculas'))
