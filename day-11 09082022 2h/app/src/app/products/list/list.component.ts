import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  products:any[] = [];

  isLoading:boolean = true;

  errorMessage:string="";


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }


  initData(){
    this.isLoading = true;
    this.errorMessage="";

    this.api.getProducts().toPromise().then( (data:any[])=>{


      console.log(data);


      this.products = data;


      
    } ).catch(  (err)=>{
      console.log(err);


      this.errorMessage="Something went wrong please try again.";
      
    }).finally(()=>{
      this.isLoading = false;
    })
  }




  deleteProduct( id ){
    console.log(id);

    this.api.deleteProduct(id).toPromise().then( (data:any)=>{

      if (data.success == true) {
        this.initData();


      } else {
        this.errorMessage=data.message;
      }
    } ).catch( (error)=>{
      
      if (error.status == 500) {
        this.errorMessage="Cannot delete this product.";
      } else {
        this.errorMessage="Something went wrong, please try again.";
      }
      
      
    } )
    
  }

}
