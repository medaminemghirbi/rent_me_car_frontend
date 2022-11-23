import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWebmasterComponent } from './dashboard-webmaster.component';

describe('DashboardWebmasterComponent', () => {
  let component: DashboardWebmasterComponent;
  let fixture: ComponentFixture<DashboardWebmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWebmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWebmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
