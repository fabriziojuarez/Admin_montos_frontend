import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Api as ApiService } from '../services/api';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class Control implements OnInit{
  total: number | null = null;
  monedaSeleccionada = 'PEN'; // Soles por defecto
  mesActual: number = new Date().getMonth() + 1;  // Determina el mes actual

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarTotal();
  }

  cargarTotal() {
    const data = { moneda_base: this.monedaSeleccionada,
      mes: this.mesActual
     };
    this.apiService.obtenerTotalPorMes(data).subscribe({
      next: (res) => {
        console.log('Respuesta del backend:', res);
        this.total = res.total_convertido;
      },
      error: (err) => console.error('Error al obtener total:', err)
    });
  }

  onMonedaChange(nuevaMoneda: string) {
    this.monedaSeleccionada = nuevaMoneda;
    this.cargarTotal();
  }

  onMesChange(nuevoMes: number){
    this.mesActual = nuevoMes;
    this.cargarTotal();
  }
}
