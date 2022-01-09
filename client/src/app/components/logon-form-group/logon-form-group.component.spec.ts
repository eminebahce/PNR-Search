import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonFormGroupComponent } from './logon-form-group.component';

describe('LogonFormGroupComponent', () => {
  let component: LogonFormGroupComponent;
  let fixture: ComponentFixture<LogonFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogonFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogonFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
