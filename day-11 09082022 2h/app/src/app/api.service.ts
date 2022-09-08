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


  getCategories(){
    return this.http.get('http://localhost:8080/api/categories/list');
  }

}
