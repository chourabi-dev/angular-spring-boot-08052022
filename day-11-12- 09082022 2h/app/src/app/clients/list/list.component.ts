import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  clients:any[] = [];

  isLoading:boolean = true;

  errorMessage:string="";


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }


  initData(){
    this.isLoading = true;
    this.errorMessage="";

    this.api.getClientsList().toPromise().then( (data:any[])=>{


      console.log(data);


      this.clients = data;


      
    } ).catch(  (err)=>{
      console.log(err);


      this.errorMessage="Something went wrong please try again.";
      
    }).finally(()=>{
      this.isLoading = false;
    })
  }






}
