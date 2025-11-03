import { Component, signal } from '@angular/core';
import { GraphicPorcents } from './graphic-porcents/graphic-porcents';
import { TableRegistros } from './table-registros/table-registros';
import { TablePartners } from './table-partners/table-partners';
import { Control } from "./control/control";

@Component({
  selector: 'app-root',
  imports: [GraphicPorcents, TableRegistros, TablePartners, Control],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend_angular');
}
