import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMapsComponent } from './car-maps.component';

describe('CarMapsComponent', () => {
  let component: CarMapsComponent;
  let fixture: ComponentFixture<CarMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
