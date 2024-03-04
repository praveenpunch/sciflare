import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = 'praveen@gmail.com';
  password: string = '1234';
  errorMessage: string = '';

  constructor( private router: Router) { }

  ngOnInit(): void {

  }
  login(): void {
    if(this.username == null || this.username == ''){
      Swal.fire('', 'Kindly Enter User Name','error');
    }else if(this.password == null || this.password == ''){
      Swal.fire('','Kindly Enter Password','error')
    }else if (this.username !== 'praveen@gmail.com' || this.password !== '1234') {
      Swal.fire('', 'Username and password do not match', 'error');
    }else{
      this.router.navigateByUrl('landingPage')
    }
  }
}
