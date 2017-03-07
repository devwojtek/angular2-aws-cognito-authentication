import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceManagerDashboardCardwallComponent } from './service-manager-dashboard-cardwall.component';

describe('ServiceManagerDashboardCardwallComponent', () => {
  let component: ServiceManagerDashboardCardwallComponent;
  let fixture: ComponentFixture<ServiceManagerDashboardCardwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceManagerDashboardCardwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceManagerDashboardCardwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
