import { EmployeeForm } from './../interfaces/employee-form';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 

const baseUrl ="http://127.0.0.1:8000/employee/"
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;
  
  constructor(private http: HttpClient) {

   }
   getEmployee(): Observable<any>{
     return this.http.get<[]>(this.baseUrl);

   }
   // tslint:disable-next-line: typedef
   create(EmployeeForm: any) {
    return this.http.post(this.url, EmployeeForm);
  }
  // tslint:disable-next-line: typedef
  update(id: any, EmployeeForm:EmployeeForm): Observable<any>  {
    return this.http.put(`${this.update_url}${id}/`, EmployeeForm);
  }
}
