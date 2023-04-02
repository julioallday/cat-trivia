import { TestBed } from '@angular/core/testing';

import { AcessoGuard } from './acesso.guard';

describe('AcessoGuard', () => {
  let guard: AcessoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AcessoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
