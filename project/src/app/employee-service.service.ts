import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from'@angular/common/http';

const baseUrl ='http://127.0.0.1:8000/employee/'
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  http: any;

  constructor() { }
  getAllEmployee(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  getEmployee(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  addEmployee(data: { employee_name: string; department: string; address:any; status: string ; job_title:string; }) {
    return this.http.post(baseUrl, data);
  }

  updatePost(id: any, data: { employee_name: string; status: string;}) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deletePost(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}