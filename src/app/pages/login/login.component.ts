import { HttpHeaders } from '@angular/common/http';
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

      // const formData = this.loginForm.value;
      // const body = new URLSearchParams();
      // body.set('username', formData.username);
      // body.set('password', formData.password);
      // body.set('authcode','cbb702ffd29e8834c6f7deb0037e348da9f94856');
      // body.set('device_type','3');


      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // });
      // const data={...this.loginForm.value,
      //   device_type:"3"}
      // console.log(data);
      
      // this.commonService.login(body,{headers}).subscribe({
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
