import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  errorMessage:string="";
  successMessage:string="";
  isLoading:boolean = false;




  form = new FormGroup({
    title: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required)

  })


  categories:any[] = [];


  constructor( private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.api.getCategories().toPromise().then((data:any[])=>{ this.categories = data });
  }

  saveData(){


     const body = this.form.value;

     
     this.api.addNEwProduct(body).toPromise().then((data:any)=>{
      if (data.success == true) {
        this.successMessage = data.message;

      } else {
        this.successMessage = data.message;
        
      }
     }).catch((err)=>{
      this.errorMessage = "Oups, something went wrong.";
     })
     
    
  }

}
