import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  getProducts(){
    return this.http.get("http://localhost:8080/api/products/list");
  }

  deleteProduct(id){
    return this.http.delete("http://localhost:8080/api/products/delete/"+id);
  }


  addNEwProduct(body){
    return this.http.post("http://localhost:8080/api/products/add", body )
  }

  updateProduct(body,id){
    return this.http.put("http://localhost:8080/api/products/update/"+id, body )
  }


  getProductByID(id){
    return this.http.get("http://localhost:8080/api/products/find/"+id )
  }

  



  getCategories(){
    return this.http.get('http://localhost:8080/api/categories/list');
  }


  /************************************** client********************************************** */




  getClientsList(){
    return this.http.get('http://localhost:8080/api/clients/list');
  }


  addNewClient(body){
    return this.http.post('http://localhost:8080/api/clients/add',body);
  }



  createNewOrder(body){
    return this.http.post('http://localhost:8080/api/clients/buy',body);
  }


  getClientOrders(id){
    return this.http.get('http://localhost:8080/api/clients/sells/'+id);
  }
}
