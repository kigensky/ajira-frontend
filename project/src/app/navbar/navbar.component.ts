import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated = false;

  constructor(
    private http: HttpClient,
    private employeeService: EmployeeServiceService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    if(this.employeeService.getToken()) {
      this.authenticated = true; 
    }
    console.log("this.authenticated", this.authenticated)
    // Emitters.authEmitter.subscribe(
    //   (auth: boolean) => {
    //     this.authenticated = auth;
    //   }
    // );
  }

  logout(): void {
    this.employeeService.removeToken();
    this.router.navigate(["/login"]);
    // this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
    //   .subscribe(() => this.authenticated = false);
  }

}

