import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTopMenuComponent } from './service-top-menu.component';

describe('ServiceTopMenuComponent', () => {
  let component: ServiceTopMenuComponent;
  let fixture: ComponentFixture<ServiceTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
