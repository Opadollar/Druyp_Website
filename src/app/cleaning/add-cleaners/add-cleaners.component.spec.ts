import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCleanersComponent } from './add-cleaners.component';

describe('AddCleanersComponent', () => {
  let component: AddCleanersComponent;
  let fixture: ComponentFixture<AddCleanersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCleanersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCleanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
