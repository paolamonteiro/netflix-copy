import { TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  configureTestSuite(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
