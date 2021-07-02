import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    console.log("this.form.getRawValue()", this.form.getRawValue())
    this.http.post('https://ajira-enterprise.herokuapp.com/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe((data:any) => { 
      console.log("data", data)
      // this.router.navigate(['/']) }
      if ((data) && (data.jwt)) {
        localStorage.setItem("ajira-tkn", JSON.stringify(data.jwt))
        this.router.navigate(['/']) 
        alert("login successfull")
      } else{
        alert("Invalid credentials")
      }
    });
  }
}
