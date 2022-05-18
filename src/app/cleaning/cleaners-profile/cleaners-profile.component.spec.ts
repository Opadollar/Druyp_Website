import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanersProfileComponent } from './cleaners-profile.component';

describe('CleanersProfileComponent', () => {
  let component: CleanersProfileComponent;
  let fixture: ComponentFixture<CleanersProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanersProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
