import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:5176/api/students'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
