import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {
  form!:FormGroup


  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.form =new FormGroup({
      employee_name:new FormControl('', [Validators.required]),
      salary_date:new FormControl('', [Validators.required]),
      salary_amount:new FormControl('', [Validators.required]),

    });
  }

  submit(){
  
    let url= "http://127.0.0.1:8000/api/employee_salary/"
    this.http.post(url, this.form.getRawValue(),{withCredentials:true}).subscribe( 
    response => {console.log(response)}
    
    ,
    error => {console.log(error)}
    
    
    )
    // console.log(this.form.getRawValue())
  
}


}
