import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBookedByRenterComponent } from './property-booked-by-renter.component';

describe('PropertyBookedByRenterComponent', () => {
  let component: PropertyBookedByRenterComponent;
  let fixture: ComponentFixture<PropertyBookedByRenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBookedByRenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBookedByRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
