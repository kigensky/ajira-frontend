import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  Employees(itemName: string, itemQuantity: number) {
    throw new Error('Method not implemented.');
  }

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }


  getEmployees() {
    return this.http.get(this.apiRoot.concat('api/employee/'));
  }

  createEmployees(name: string, department: string, address: string,  status: string, job_title: string) {
    return this.http.post(
      this.apiRoot.concat('api/employee/'),
      { name, department }
    );
  }

  deleteEmployees(id: number) {
    return this.http.delete(this.apiRoot.concat(`api/employee/${id}/`));
  }
}
