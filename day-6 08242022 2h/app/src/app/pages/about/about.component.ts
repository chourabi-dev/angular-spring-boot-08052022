import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('',  [Validators.required,Validators.minLength(3)]  ),
    price: new FormControl(0,Validators.required),
    quantity: new FormControl(10,Validators.required),
    email: new FormControl("", [Validators.email,Validators.required] ),
    
    
  })

  constructor() { }

  ngOnInit(): void {

    console.log(this.form);
    
  }


  save(){
    console.log(this.form.value);

    console.log(this.form.valid
      );
    
    
    
  }

  

}
