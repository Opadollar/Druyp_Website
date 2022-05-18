import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestPaymentComponent } from './new-request-payment.component';

describe('NewRequestPaymentComponent', () => {
  let component: NewRequestPaymentComponent;
  let fixture: ComponentFixture<NewRequestPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequestPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequestPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
