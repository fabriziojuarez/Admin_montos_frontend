import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getPartners(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/partners`);
  }

  updatePartner(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseUrl}/partners/${id}`, data, { headers });
  }

  // Uso de api externa
  obtenerTotalPorMes(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/fastfortex`, data);
  }
}
