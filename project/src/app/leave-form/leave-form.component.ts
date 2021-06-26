import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {
  form!:FormGroup

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.form =new FormGroup({
      employee_name:new FormControl('', [Validators.required]),
      department:new FormControl('', [Validators.required]),
      month:new FormControl('', [Validators.required]),
      year:new FormControl('', [Validators.required]),
      start_date:new FormControl('', [Validators.required]),
      end_date:new FormControl('', [Validators.required]),


    });


  }

  submit(){
  
    let url= "http://127.0.0.1:8000/api/leave/"
    this.http.post(url, this.form.getRawValue(),{withCredentials:true}).subscribe( 
    response => {console.log(response)}
    
    ,
    error => {console.log(error)}
    
    
    )
    // console.log(this.form.getRawValue())
  
}

}
