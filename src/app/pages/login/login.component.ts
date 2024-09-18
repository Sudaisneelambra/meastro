import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hidePassword = true;

  loginForm:any

  constructor(private fb:FormBuilder,private commonService:CommonService,private router:Router){
    this.loginForm= fb.group({
      username:['demo_user',[Validators.required]],
      password:['1234',[Validators.required]]
    })
  }


  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      // this.commonService.login(this.loginForm.value).subscribe({
      //   next:(res)=>{
      //     console.log(res);
      //   },
      //   error:(err)=>{
      //     console.log(err);
      //   }
      // })

      this.router.navigate(['/home']);
      
    } else{
      alert('please fill the fields') 
    }
  }

}
