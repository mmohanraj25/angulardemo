import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  loginFormBuilder:FormBuilder;
  errorMessage:string;

  constructor(loginFormBuilder:FormBuilder) {
    this.loginFormBuilder=loginFormBuilder;
   }
  
   ngOnInit() { 
    this.loginForm=this.loginFormBuilder.group({
    name:['',Validators.required],
    pwd:['',Validators.required]  
   });
   
  }


  validateForm(){
    this.errorMessage=null;
  if(this.loginForm.get("name").touched && this.loginForm.get("name").errors){
    this.errorMessage="User Name Cannot be empty or blank";
    return;
  }
  if(this.loginForm.get("pwd").touched && this.loginForm.get("pwd").errors){
    this.errorMessage="Password Cannot be empty or blank";
    return;
  } 
}
}