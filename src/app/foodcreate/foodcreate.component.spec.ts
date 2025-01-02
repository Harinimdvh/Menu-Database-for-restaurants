import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcreateComponent } from './foodcreate.component';

describe('FoodcreateComponent', () => {
  let component: FoodcreateComponent;
  let fixture: ComponentFixture<FoodcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodcreateComponent]
    });
    fixture = TestBed.createComponent(FoodcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
