import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  authenticated = false;

  constructor(
    private router: Router,
    private employeeService: EmployeeServiceService
  ) { }

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
