import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  isLoading:boolean = true;

  msgError='';

  users:any[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getDataFromServer();
  }


  getDataFromServer(){

    this.http.get('https://jsonplacehjsjsjsjolder.typicode.com/users').toPromise().then((res:any)=>{
      console.log(res);

    this.users = res;
      
    }).catch((err)=>{
      console.log(err);

      this.msgError="Something went wrong , please tray again later."
      
    }).finally(()=>{
      this.isLoading = false;
    })
    
  }

}
