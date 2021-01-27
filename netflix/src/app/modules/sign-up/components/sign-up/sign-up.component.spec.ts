import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ]
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
