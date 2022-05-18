import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesUnderReviewComponent } from './properties-under-review.component';

describe('PropertiesUnderReviewComponent', () => {
  let component: PropertiesUnderReviewComponent;
  let fixture: ComponentFixture<PropertiesUnderReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesUnderReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesUnderReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
