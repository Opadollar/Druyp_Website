import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewPropertyComponent } from './list-new-property.component';

describe('ListNewPropertyComponent', () => {
  let component: ListNewPropertyComponent;
  let fixture: ComponentFixture<ListNewPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNewPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
