import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBodyComponent } from './flight-body.component';

describe('FlightBodyComponent', () => {
  let component: FlightBodyComponent;
  let fixture: ComponentFixture<FlightBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
