import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from'@angular/common/http';

const baseUrl ='http://127.0.0.1:8000/employee/'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}


  getAllEmployee(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  getEmployee(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }


  addEmployee(data: { }) {
    return this.http.post(baseUrl, data);
  }

  updateEmployee(id: any, data: { name: string; }) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteEmployee(id: any) {

    return this.http.delete(`${baseUrl}/${id}`);
  }
}
