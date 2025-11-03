import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartType } from 'chart.js';
import { Api as ApiService } from '../services/api';

@Component({
  selector: 'app-graphic-porcents',
  imports: [CommonModule, NgChartsModule],
  templateUrl: './graphic-porcents.html',
  styleUrl: './graphic-porcents.css',
})
export class GraphicPorcents implements OnInit {
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [{ data: [], backgroundColor: [] }]
  };

  public loading = true;
  public error = false;

  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.apiService.getPorcentajes().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.pieChartData = {
          labels: data.map((item: any) => item.moneda_registro),
          datasets: [
            {
              data: data.map((item: any) => item.porcentaje),
              backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#E91E63']
            }
          ]
        };
        this.loading = false;
      },

      error: (err) => {
        console.error('Error al obtener los registros:', err);
        this.loading = false;
      }
    });
  }
}
