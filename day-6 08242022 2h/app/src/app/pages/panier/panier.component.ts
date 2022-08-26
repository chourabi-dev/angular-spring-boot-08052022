import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  list:any[] = [];


  constructor(private panierService:PanierService) { }

  ngOnInit(): void {
   this.list =  this.panierService.list;
  }

}
