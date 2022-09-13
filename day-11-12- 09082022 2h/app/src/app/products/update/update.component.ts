import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


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


  constructor( private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.initData();

    this.getProductInfo();
  }

  initData(){
    this.api.getCategories().toPromise().then((data:any[])=>{ this.categories = data });
  }


  getProductInfo(){
    const id = this.route.snapshot.params.id;


    this.api.getProductByID(id).toPromise().then((res:any)=>{
      console.log(res);


      this.form.setValue( res ) 
      
    })


  }


  saveData(){


     const body = this.form.value;
     const id = this.route.snapshot.params.id;

     
     this.api.updateProduct(body,id).toPromise().then((data:any)=>{
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
