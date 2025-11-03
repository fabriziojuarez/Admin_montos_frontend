import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getRegistros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/registros`);
  }

  getPorcentajes(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/porcentajes`);
  }
}
