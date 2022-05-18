import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesDeclinedComponent } from './properties-declined.component';

describe('PropertiesDeclinedComponent', () => {
  let component: PropertiesDeclinedComponent;
  let fixture: ComponentFixture<PropertiesDeclinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesDeclinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesDeclinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
