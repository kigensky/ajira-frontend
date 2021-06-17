import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
  
  
})

export class AppimageComponent {  
  constructor() { }   
}    
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
