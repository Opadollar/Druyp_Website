import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRequestComponent } from './add-new-request.component';

describe('AddNewRequestComponent', () => {
  let component: AddNewRequestComponent;
  let fixture: ComponentFixture<AddNewRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
