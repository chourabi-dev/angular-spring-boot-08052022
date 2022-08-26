import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  list:any[] = [];



  constructor() { }


  ajouterAuPanier(produit:any){
    this.list.push(produit);
  }


}
