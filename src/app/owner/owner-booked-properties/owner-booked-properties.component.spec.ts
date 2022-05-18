import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerBookedPropertiesComponent } from './owner-booked-properties.component';

describe('OwnerBookedPropertiesComponent', () => {
  let component: OwnerBookedPropertiesComponent;
  let fixture: ComponentFixture<OwnerBookedPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerBookedPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerBookedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
