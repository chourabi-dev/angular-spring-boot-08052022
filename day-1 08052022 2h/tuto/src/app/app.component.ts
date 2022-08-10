import { Component } from '@angular/core';
import { Hero } from './models/Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username = "chourabi taher";

  email:string; 
  year = 2022; 
  age:number = 50;
  
  employee =  { name:"chourabi" }


  employees = [ 
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
  
   ];



   heros:Hero[] = [
    new Hero("taher","chourabi",'tchourabi@gmail.com'),
    new Hero("taher","chourabi",'tchourabi@gmail.com'),
    new Hero("taher","chourabi",'tchourabi@gmail.com'),
    new Hero("taher","chourabi",'tchourabi@gmail.com'),
    new Hero("taher","chourabi",'tchourabi@gmail.com'),
    new Hero("taher","chourabi",'tchourabi@gmail.com'),
      
   ]


   /************************************************************ */


   showBloc:boolean = true;



   users:any[] = [
    { name:"chourabi taher", year:1990 },
    { name:"chourabi taher", year:1995 },
    { name:"chourabi taher", year:2000 },
    { name:"chourabi taher", year:2010 },
    { name:"chourabi taher", year:2010 },
      
   ]



}
