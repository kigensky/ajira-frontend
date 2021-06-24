import { EmployeeSalary } from './employee-salary';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const baseUrl ='http://127.0.0.1:8000/employee_salary/'

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  baseUrl: any;

  constructor(private http: HttpClient) { }
  FetchSalary(): Observable<EmployeeSalary[]> {
    return this.http.get<EmployeeSalary[]>(baseUrl);
  }

  create(EmployeeSalary: any) {
    return this.http.post(this.baseUrl, EmployeeSalary)
  }
}