import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

 
  hidePassword = true;

  signUpForm:any

  constructor(private fb:FormBuilder,private router:Router){
    this.signUpForm= fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }


  onSubmit(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
      this.router.navigate(['/home']);
      
    } else{
      alert('please fill the fields') 
    }

  }
}
