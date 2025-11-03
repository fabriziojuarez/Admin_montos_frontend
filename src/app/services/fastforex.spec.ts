import { TestBed } from '@angular/core/testing';

import { Fastforex } from './fastforex';

describe('Fastforex', () => {
  let service: Fastforex;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fastforex);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
