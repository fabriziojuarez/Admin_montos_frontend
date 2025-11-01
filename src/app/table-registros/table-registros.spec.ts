import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRegistros } from './table-registros';

describe('TableRegistros', () => {
  let component: TableRegistros;
  let fixture: ComponentFixture<TableRegistros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRegistros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRegistros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
