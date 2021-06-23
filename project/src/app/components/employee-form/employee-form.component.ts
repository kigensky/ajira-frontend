import { EmployeeForm } from './../../interfaces/employee-form';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  EmployeeService: any;
  EmployeeForm: any;

  constructor() { }
  // tslint:disable-next-line: typedef
  getEmployee() {
    this.EmployeeService.getEmployee().subscribe(
      (      response: any) => {
        this.EmployeeForm = response;
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  // tslint:disable-next-line: typedef
  onSubmit(neighborhood: any) {
    this.EmployeeService.create(neighborhood).subscribe((result: any) => {
      console.warn('result', result);
    });
    console.warn(neighborhood);
  }
  

  ngOnInit(): void {
  }

}
