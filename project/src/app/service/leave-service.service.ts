import { LeaveFormComponent } from './../components/leave-form/leave-form.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




const baseUrl ='http://127.0.0.1:8000/leave/'

@Injectable({
  providedIn: 'root'
})
export class LeaveServiceService {

  constructor(private http:HttpClient) { }
  
  getAll(): Observable<LeaveFormComponent[]> {
    return this.http.get<LeaveFormComponent[]>(baseUrl);
  }

}
