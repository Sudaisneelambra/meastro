import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }


  api='http://cbe.themaestro.in:8021/api_mcharge_v2/login'

  login(data:any,options:any):Observable<any>{
    return this.http.post(this.api, data, options);
  }

}
