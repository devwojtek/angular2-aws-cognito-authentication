import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSideMenuComponent } from './service-side-menu.component';

describe('ServiceSideMenuComponent', () => {
  let component: ServiceSideMenuComponent;
  let fixture: ComponentFixture<ServiceSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
