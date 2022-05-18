import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledOrderDetailComponent } from './cancelled-order-detail.component';

describe('CancelledOrderDetailComponent', () => {
  let component: CancelledOrderDetailComponent;
  let fixture: ComponentFixture<CancelledOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
