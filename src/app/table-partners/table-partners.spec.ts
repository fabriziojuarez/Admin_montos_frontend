import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePartners } from './table-partners';

describe('TablePartners', () => {
  let component: TablePartners;
  let fixture: ComponentFixture<TablePartners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePartners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePartners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
