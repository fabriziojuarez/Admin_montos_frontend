import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://localhost:8000/registros'; // tu endpoint

  constructor(private http: HttpClient) {}

  getRegistros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
