import { EmployeeSalary } from './../interfaces/employee-salary';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const baseUrl ='http://127.0.0.1:8000/employee_salary/'

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private http: HttpClient) {}

  getSalaryData(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getSalaryDetail(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  }

  


