import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedOrderDetailComponent } from './received-order-detail.component';

describe('ReceivedOrderDetailComponent', () => {
  let component: ReceivedOrderDetailComponent;
  let fixture: ComponentFixture<ReceivedOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
