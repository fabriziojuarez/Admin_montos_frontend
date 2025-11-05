import { Component, OnInit } from '@angular/core';
import { Api as ApiService } from '../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-partners',
  imports: [CommonModule, FormsModule],
  templateUrl: './table-partners.html',
  styleUrl: './table-partners.css',
})
export class TablePartners implements OnInit{
  partners: any[] = [];

  horarios = [
    { id: 1, nombre: 'Horario Completo' },
    { id: 0, nombre: 'Horario Parcial' }
  ];

  estados = [
    { id: 1, nombre: 'Activo' },
    { id: 0, nombre: 'Inactivo' }
  ];

  editando: { [key: number]: boolean } = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.cargarPartners();
  }

  cargarPartners(): void {
    this.apiService.getPartners().subscribe({
      next: data => {
        this.partners = data;
      },
      error: err => console.error('Error al cargar partners:', err)
    });
  }

  activarEdicion(id_partner: number): void {
    this.editando[id_partner] = true;
  }

  guardarCambios(partner: any): void {
    console.log('Guardando ID:', partner.id_partner, 'a las', new Date().toLocaleTimeString());

    const data = { name_partner: partner.name_partner, 
      id_horario: partner.id_horario, 
      status_partner: partner.status_partner,
      observation_partner: partner.observation_partner };

    this.apiService.updatePartner(partner.id_partner, data).subscribe({
      next: (res) => console.log(' PUT completado', res),
      error: (err) => console.error(' Error PUT', err)
    });
    this.editando[partner.id_partner] = false;
  }

  eliminarPartner(id_partner: number): void {
    console.log('Eliminando partner:', id_partner);
    // TODO: Aquí lue
  }
}
