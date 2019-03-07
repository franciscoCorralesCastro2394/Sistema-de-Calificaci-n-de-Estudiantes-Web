import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private estudentsList =  [{


    "nombre": "Carlos Mora",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{


    "nombre": "Angela García",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{


    "nombre": "Cristhian Brenes",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "8"
},
{


    "nombre": "Luis Rodriguez",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{


    "nombre": "Alejandra Godinez",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "10"
},
{


    "nombre": "Esteban Saenz",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{


    "nombre": "Maria Cordero",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "10"
},
{


    "nombre": "Angel Vargas",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{


    "nombre": "Pedro Escobar",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "8"
},
{


    "nombre": "Jaime Celeita",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9.5"
},
{


    "nombre": "Ileana Salas",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{


    "nombre": "",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "10"
}
];

private  coursesList = [
  {
  "nombre": "Programación Web",
  "profesor": "Randall Corrales",
  "anyo": 2019,
  "semestre": "I"
},
{
"nombre": "Análisis en cloud Computing",
"profesor": "Jorge Chinchilla",
"anyo": 2019,
"semestre": "II"
},
{
"nombre": "Investigación de proyectos",
"profesor": "Carlos Benavides",
"anyo": 2019,
"semestre": "II"
},
{
"nombre": "Sistemas de información distribuidos",
"profesor": "Ana Fuentes",
"anyo": 2019,
"semestre": "I"
},
{
"nombre": "Bases de datos Web",
"profesor": "Krissia Navarro",
"anyo": 2019,
"semestre": "I"
},
{
"nombre": "Diseño Web",
"profesor": "Kembly Calderon",
"anyo": 2019,
"semestre": "II"
},
{
"nombre": "Analisis de Bases de datos",
"profesor": "Jorge Mora",
"anyo": 2019,
"semestre": "II"
}
];
  
  constructor() { }

  getStudentList = () => this.estudentsList; 
  getCoursesList =() => this.coursesList;

}
