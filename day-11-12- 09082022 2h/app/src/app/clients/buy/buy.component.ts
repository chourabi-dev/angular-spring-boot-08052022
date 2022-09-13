import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {


  products:any[] = [];


  orders:any[] = [];


  errorMessage:string="";
  successMessage:string="";

  form = new FormGroup({
    product: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    
  })
  constructor(private route:ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().toPromise().then((res:any[])=>{
      this.products = res;
    })


    this.getClientOrders();

  }


  getClientOrders(){
    const id = this.route.snapshot.params.id;
    this.api.getClientOrders(id).toPromise().then((res:any[])=>{
      console.log(res);
      

      this.orders = res;
    })
  }


  buy(){
    


    const id = this.route.snapshot.params.id;

    let body = {
      client : id,
      product : this.form.value.product,
      quantity :this.form.value.quantity,
    }


    this.api.createNewOrder(body).toPromise().then((res:any)=>{
      if (res.success == true) {
        this.successMessage = res.message;


        this.getClientOrders();
        
      } else {
        this.errorMessage = res.message;
        
      }
    })
    
  }

}
