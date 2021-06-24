import { EmployeeService } from './../../service/employee.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {

  constructor(private http:HttpClient , private employeeservice: EmployeeService) { }

  
  ngOnInit(): void {
  }

}
