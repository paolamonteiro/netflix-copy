import { TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  configureTestSuite(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
