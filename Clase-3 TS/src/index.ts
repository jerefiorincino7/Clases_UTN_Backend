/*
Paradigma de programación
POO: Programación Orientada a Objetos
Todos los problemas en nuestro código los vamos a resolver a partir de los objetos de nuesto código
Para crear objetos usaremos "moldes"/"plantillas" llamadas clases
*/

//Objeto literal
/* 
const user_1 = {
    name: "pepe",
    id: 1,
    email: "pepe@gmail.com"
}

const user_2 = {
    name: "julieta",
    id: 2,
    email: "julieta@gmail.com"
} 
*/

/* class User {
    name: string
    id: number
    email: string
    dinero: number
    constructor(name: string, email: string, id: number){
        this.name = name
        this.email = email
        this.id = id
        this.dinero = 0
    }
} */

//Quiero crear un usuario
//Si queremos instanciar la clase User() debemos usar la palabra new
//new class() invoca a la funcion constructora 
/* const usuario_1 = new User("pepe", "pepe@gmail.com", 1) */


/*
La clase = molde
Objeto = resultado de usar el molde y crear algo
Instancia = el momento donde se usa el molde
this = en contexto de la función constructora es una referencia a la instancia que se está creando
*/

/* 
Crear la clase Product que tenga las propiedades
id
title
description
stock
price
discount -> siempre inicia en 0
Crear 3 productos
*/

/* class Product {
    id: number
    title: string 
    description: string
    stock: number
    price: number
    discount: number
    constructor(id: number, title: string, description:string, stock: number, price: number){
        this.id = id
        this.title = title
        this.description = description
        this.stock = stock
        this.price = price
        this.discount = 0
    }
}
const producto_1 = new Product(1, 'Tv Samsung 50"', "Televisión Samsung de 50 pulgadas", 20, 150000)
const producto_2 = new Product(2, 'GoogleTv BGH 45"', "Televisión Google BGH de 45 pulgadas", 35, 130000 )
const producto_3 = new Product(3, 'Tv LG 80"', "Televisión LG de 80 pulgadas", 10, 250000 )
console.log(producto_1, producto_2, producto_3) */

type Seniority = 'entry' | 'junior' | 'mid' | 'senior' | 'mid-senior'

interface SeniorityConfig {
    seniority_label: Seniority ,
    increase_percentage: number
}
const seniorities: SeniorityConfig[] = [
    {
        seniority_label: 'entry',
        increase_percentage : 0
    },
    {
        seniority_label: 'junior',
        increase_percentage: 5
    },
    {
        seniority_label: 'mid',
        increase_percentage: 10
    },
    {
        seniority_label: 'mid-senior',
        increase_percentage: 20
    },
    {
        seniority_label: 'senior',
        increase_percentage: 50
    },
]
class Empleado {
    name: string
    id: number
    email: string
    dinero: number
    salario: number
    seniority: Seniority
    puesto: string
    constructor(name: string, email: string, id: number, salario: number, seniority: Seniority, puesto: string){
        this.name = name
        this.email = email
        this.id = id
        this.salario = salario
        this.dinero = 0
        this.seniority = seniority
        this.puesto = puesto
    }
    cobrar(): void{
        this.dinero = this.dinero + this.salario
    }
    saludar(): string{
        return "hola a todos, mi nombre es " + this.name
    }
    cambiarEmail(nuevo_email: string): void{
        this.email = nuevo_email
    }
    aumentarSueldo(porcentaje_aumento: number): void {
        let aumento: number = this.salario * (porcentaje_aumento / 100)
        this.salario = this.salario + aumento
    }
aumentarSeniority(): void{
        if(this.seniority === seniorities[seniorities.length - 1].seniority_label){
            return
        }
        
        for(let seniority of seniorities){
            if(this.seniority === seniority.seniority_label){
                const indice_seniority = seniorities.indexOf(seniority)
                console.log(indice_seniority)
                const seniority_siguente: SeniorityConfig = seniorities[indice_seniority + 1]
                this.seniority = seniority_siguente.seniority_label
                this.aumentarSueldo(seniority_siguente.increase_percentage)
            }
        }
    }
}
const empleado_1 = new Empleado("pepe", "pepe@gmail.com", 1, 5000, "entry", "Programador Frontend")

empleado_1.cobrar()
empleado_1.aumentarSueldo(100)
empleado_1.aumentarSeniority()
console.log(empleado_1)