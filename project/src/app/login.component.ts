import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
  <style>
    body {
      background-image: url("/assets/bc.jpeg");
    } 

  </style>

  <div class="body" style="color:purple">  
    <div style="text-align:center">
      <h1>
        Login
      </h1>
    </div>

    <div style="text-align:center">
      <input #username type='text' placeholder='username'>
      <input #password type='password' placeholder='password'>
      <button (click)="login(username.value, password.value)">login</button>
    </div>
    <div  style="text-align:center" >
      <button>Sign-up</button>
    </div>
    <p>{{ error?.message }}</p>
    <p *ngIf="error">{{ error?.error | json }}</p>
    
  </div>  
  `
  
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      success => this.router.navigate(['list']),
      error => this.error = error
    );
  }
}
