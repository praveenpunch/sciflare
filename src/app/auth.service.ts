// import { Injectable } from "@angular/core";
// import { HttpClient } from '@angular/common/http';
// import { environment } from "src/environments/environment";

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   serviceApiUrl: string = environment.serviceApiUrl;

//   constructor(private http: HttpClient) {

//   }
//   isLoggedIn(): boolean {
//     return !!localStorage.getItem('token');
//   }

//   login(username: string, password: string): boolean {
//     if (username === 'praveen@gmail.com' && password === '1234') {
//       localStorage.setItem('token', 'your_auth_token_here');
//       return true;
//     }
//     return false;
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//   }
// }
