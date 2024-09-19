class Entero:
    #constructor = __init__
    def __init__(self, Numero):         
        self.Num = Numero

    def setNum(self):
        input_value = input("Enter a number: ")
        self.Num = int(input_value)
    
    def getNum(self):
        return self.Num
    
    def showNum(self):
        print(self.get.Num())

    def showResultado(self, respuesta):
        print(respuesta)

    def incrementarNum(self):
        self.Num += 1

    def decrementarNum(self):
        self.Num -= 1

    def esParImpar(self):
        return (self.Num % 2 == 0)
    
    def factorial(self):
        if self.Num < 0:
            return "Factorial no está definido para números negativos"
        
        fact = 1
        for i in range(1, self.Num + 1):
            fact *= i
        
        return f"El factorial de {self.Num} es {fact}"

    def esPerfecto(self):
        if self.Num <= 1:
            return False
        suma_divisores = sum(i for i in range(1, self.Num) if self.Num % i == 0)
        return suma_divisores == self.Num

    def menu(self):
        while True:
            print("\nMenú:")
            print("1. Establecer un nuevo número")
            print("2. Mostrar el número actual")
            print("3. Incrementar el número")
            print("4. Decrementar el número")
            print("5. Verificar si es par o impar")
            print("6. Factorial de")
            print("7. Es perfecto")
            print("8. Salir")

            opcion = input("Ingrese una opción:")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incrementarNum()
            elif opcion == '4':
                self.decrementarNum()
            elif opcion == '5':
                if self.esParImpar():
                    print("El número es par.")
                else:
                    print("El número es impar.")
            elif opcion == '6':
                self.factorial()
            elif opcion == '7':
                if self.esPerfecto():
                    print("Es número perfecto")
                else:
                    print("No es perfecto")
            elif opcion == '8':
                print("¡Hasta luego!")
                break
            else: 
                print("Opción inválida. Intente nuevamente.")

# Crear un objeto de la clase Entero
numero = Entero(10)

#Iniciar el menú
numero.menu()