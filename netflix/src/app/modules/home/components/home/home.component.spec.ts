import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
