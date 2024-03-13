import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isuserGuard } from './isuser.guard';

describe('isuserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isuserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
