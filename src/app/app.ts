import { Component, signal } from '@angular/core';
import { GraphicPorcents } from './graphic-porcents/graphic-porcents';
import { TableRegistros } from './table-registros/table-registros';

@Component({
  selector: 'app-root',
  imports: [GraphicPorcents, TableRegistros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend_angular');
}
