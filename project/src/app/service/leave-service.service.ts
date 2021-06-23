import { LeaveForm } from './../interfaces/leave-form';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




const baseUrl ='http://127.0.0.1:8000/leave/'

@Injectable({
  providedIn: 'root'
})
export class LeaveServiceService {
   [x: string]: any;

  constructor(private http:HttpClient) { }
  
  FetchleaveApi(): Observable<LeaveForm[]> {
    return this.http.get<LeaveForm[]>(baseUrl);
  }

  create(LeaveForm: any) {
    return this.http.post(this.baseUrl, LeaveForm)
  }

}
