import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceManagerDashboardRouterComponent } from './service-manager-dashboard-router.component';

describe('ServiceManagerDashboardRouterComponent', () => {
  let component: ServiceManagerDashboardRouterComponent;
  let fixture: ComponentFixture<ServiceManagerDashboardRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceManagerDashboardRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceManagerDashboardRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
