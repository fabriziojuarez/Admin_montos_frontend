import { Component, OnInit } from '@angular/core';
import { Api as ApiService } from '../services/api';

@Component({
  selector: 'app-table-registros',
  imports: [],
  templateUrl: './table-registros.html',
  styleUrl: './table-registros.css',
})
export class TableRegistros implements OnInit {
  registros: any[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('✅ ngOnInit ejecutado');
    this.apiService.getRegistros().subscribe({
      next: (data) => {
        console.log('✅ Datos recibidos:', data);
        this.registros = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Error al obtener los registros:', err);
        this.loading = false;
      }
    });
  }
}