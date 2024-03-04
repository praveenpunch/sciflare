import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(public http: HttpClient) { }

  serviceApiUrl: string = environment.serviceApiUrl;

  fetchUserData(){
    return this.http.get<Observable<any>>(this.serviceApiUrl + '/users')
  }

  addNewUser(userData:any) {
    return this.http.post<Observable<any>>(this.serviceApiUrl + "users", userData);
  }
  editUser(userData:any){
    return this.http.put<Observable<any>>(this.serviceApiUrl + "/users", userData);
  }
  fetchUserById(id:any){
    return this.http.get<Observable<any>>(this.serviceApiUrl + '/users?id=' + id)
  }
}
