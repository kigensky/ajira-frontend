import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      employee_name: '',
      address: '',
      status: '',
      job_title: ''
    });
  }
  submit() { 
    console.log("this.form.getRawValue()", this.form.getRawValue())
    // this.http.post('http://localhost:8000/api/employee/', this.form.getRawValue())
    //   .subscribe(() => ;
    this.http.post('http://localhost:8000/api/employee/', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(() => { 
      console.log("this.form.getRawValue()", this.form.getRawValue())
      this.router.navigate(['/'])}
    );
  }

}
