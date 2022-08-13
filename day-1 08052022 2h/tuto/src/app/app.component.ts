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



   /*********************************************** attrs ********************************* */

   photos:string[] = [
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg',
    'https://www.easytutoriel.com/wp-content/uploads/2021/09/fond-d-ecran-anime-windows-11-10-tutoriel-facile.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg'
   ];

   index:number = 0;


   photoURL:string=this.photos[this.index]; 

   nextPhoto(){
    //this.index = this.index + 1; 
    this.index++;


    if (this.index === this.photos.length) {
      // oups !!
      this.index = 0;
    }

    this.photoURL = this.photos[this.index]; 

    
   }




   previousPhoto(){
    //this.index = this.index + 1; 
    this.index--;


    if (this.index < 0) {
      // oups !!
      this.index = ( this.photos.length - 1 );
    }


    this.photoURL = this.photos[this.index]; 

    
   }


   /****************************************************** */



   shoppingList:any[] = []



   isTyping(event){ 
    

    const val = event.target.value;


    if (event.code === 'Enter') {
      

      const product = {
        label: val,
        date: new Date()
      };


      this.shoppingList.push(product);

      // clear the input
      event.target.value = '';



    }
    
  
    
   }



   deleteProduct(i){
    this.shoppingList.splice(i,1);
   }



}
