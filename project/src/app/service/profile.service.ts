import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   url =  "http://127.0.0.1:8000/profile/";
  constructor(private http: HttpClient) { }

  fetchProfileApi(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url);

  }
}
