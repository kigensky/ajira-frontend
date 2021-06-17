import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }


  getShoppingItems() {
    return this.http.get(this.apiRoot.concat('api/employee/'));
  }

  createShoppingItem(name: string, quantity: number) {
    return this.http.post(
      this.apiRoot.concat('api/employee/'),
      { name, quantity }
    );
  }

  deleteShoppingItem(id: number) {
    return this.http.delete(this.apiRoot.concat(`api/employee/${id}/`));
  }
}
