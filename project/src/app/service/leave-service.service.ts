import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




const baseUrl ='http://127.0.0.1:8000/leave/'

@Injectable({
  providedIn: 'root'
})
export class LeaveServiceService {
  

  

   constructor(private http: HttpClient) {}

   getLeaveData(id: any): Observable<any> {
     return this.http.get(`${baseUrl}/${id}`);
   }
 
   getLeaveDetail(id: any): Observable<any> {
     return this.http.get(`${baseUrl}/${id}`);
   }
 
   addLeave(data: {

    employee_name:string;
    department:string;
    month :string;
    year: number;
    Start_Date: number;
    End_Date: number;
    Reason: string;


  }){
    return this.http.post(baseUrl, data)
  }

  updateLeave(
    id: any,
    data: {
      department:string;
      month :string;
      year: number;
      Start_Date: number;
      End_Date: number;
      Reason: string;
    }
  ) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteLeave(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
