import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPorcents } from './graphic-porcents';

describe('GraphicPorcents', () => {
  let component: GraphicPorcents;
  let fixture: ComponentFixture<GraphicPorcents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicPorcents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicPorcents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
