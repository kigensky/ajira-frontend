import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
  form!:FormGroup
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
        this.form =new FormGroup({
            employee_name:new FormControl('', [Validators.required]),
            department:new FormControl('', [Validators.required]),
            address:new FormControl('', [Validators.required]),
            status:new FormControl('', [Validators.required]),
            job_title:new FormControl('', [Validators.required]),
      });
  
  }
  
  
  
  submit(){
  
        let url= "http://127.0.0.1:8000/api/employee/"
        this.http.post(url, this.form.getRawValue(),{withCredentials:true}).subscribe( 
        response => {console.log(response)}
        
        ,
        error => {console.log(error)}
        
        
        )
        // console.log(this.form.getRawValue())
      
  }

}