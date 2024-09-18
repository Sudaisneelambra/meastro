import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hidePassword = true;

  loginForm:any

  constructor(private fb:FormBuilder){
    this.loginForm= fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }


  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      
    } else{
      alert('please fill the fields') 
    }
  }

}
