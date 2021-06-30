import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveServiceService } from '..//leave-service.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {
  form: FormGroup;

  public leaveData: any = {
    employee_name: '',
    department:'',
    month: '',
    year: '',
    start_date: '',
    end_date: '',
    reason: ''
  }




  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private leaveService: LeaveServiceService
  ) { }

  ngOnInit(): void {
    if(!this.leaveService.getToken()) {
      this.router.navigate(["/login"])
    }
  }
  submit() { 
    console.log("this.leaveData", this.leaveData)
    let url= `${this.leaveService.getBaseURL()}api/leave/`
    this.leaveService.loadPost(url, this.leaveData).then((data:any) => {
      console.log("data", data)
      if(data.data) {
        alert("Leave Created successfully")
      } else {
        alert("Something went worng when creating the user")
      }
     
    })
    
  }

}