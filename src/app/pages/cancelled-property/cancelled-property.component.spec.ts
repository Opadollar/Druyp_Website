import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledPropertyComponent } from './cancelled-property.component';

describe('CancelledPropertyComponent', () => {
  let component: CancelledPropertyComponent;
  let fixture: ComponentFixture<CancelledPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
