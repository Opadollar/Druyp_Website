import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureProfileComponent } from './furniture-profile.component';

describe('FurnitureProfileComponent', () => {
  let component: FurnitureProfileComponent;
  let fixture: ComponentFixture<FurnitureProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
