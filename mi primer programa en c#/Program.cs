using System.Runtime.InteropServices.Marshalling;

namespace mi_primera_programa_en_c_;

class Program
{
    static void Main(string[] args)
    {
        //Primer metodo, mostrar un Hola Mundo
        //HelloWorld();

        //Segundo metodo, mostrar la edad ingresada por el usuario
        //ObtenerEdad();

        //Tercer metodo, mostrar la edad calculada a partir del anio de nacimiento
        CalcularEdad();
    }

    public static void HelloWorld()
    {
        Console.WriteLine("Hello, World!");
    }

    public static void ObtenerEdad()
    {
        Console.WriteLine("Introduce your age:");
        string? ageInput = Console.ReadLine();
        if (string.IsNullOrEmpty(ageInput))
        {
            Console.WriteLine("Introduce a value");
        }
        else
        {
            int ageInteger = Int32.Parse(ageInput);
            Console.WriteLine("Your age is: " + ageInteger);
        }
    }
    public static void CalcularEdad()
    {
        Console.WriteLine("Introduce the year you were born:");
        string? yearBornInput = Console.ReadLine();
        if (string.IsNullOrEmpty(yearBornInput))
        {
            Console.WriteLine("Introduce a valid value");
        }
        else
        {
            int yearBorn = Int32.Parse(yearBornInput);
            Console.WriteLine("Your calculated age is:" + (2024 - yearBorn));
        }
    }
}
