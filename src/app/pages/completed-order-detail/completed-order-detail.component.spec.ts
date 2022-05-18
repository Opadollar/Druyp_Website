import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrderDetailComponent } from './completed-order-detail.component';

describe('CompletedOrderDetailComponent', () => {
  let component: CompletedOrderDetailComponent;
  let fixture: ComponentFixture<CompletedOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
