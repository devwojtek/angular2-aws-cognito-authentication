import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceManagerDashboardComponent } from './service-manager-dashboard.component';

describe('ServiceManagerDashboardComponent', () => {
  let component: ServiceManagerDashboardComponent;
  let fixture: ComponentFixture<ServiceManagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceManagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
