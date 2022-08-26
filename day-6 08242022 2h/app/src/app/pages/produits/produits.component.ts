import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits:any[] = [
    { id:1, title:"Samsung S21" },
    { id:2, title:"HP Pavillion" },
    { id:3, title:"MacBook Air" },
    
  ]

  // inject the service !!!!
  constructor(  private panierService:PanierService  ) { }

  ngOnInit(): void {
  }


  add(p){
    this.panierService.ajouterAuPanier(p);
  }

}
