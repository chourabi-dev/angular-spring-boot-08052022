import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  menus:any[] = [
    { title:"Home", submenu:"this is a test" },
    { title:"About", submenu:"this is a test" },
    { title:"contact us", submenu:"this is a test" },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
