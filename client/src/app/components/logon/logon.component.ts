import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingDataService } from '../../services/booking-data.service';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
  invalidLogon: string = "";
  logonForm!: FormGroup;
  flight = { bookingCode: '', familyName: '' };

  constructor(private bookingDataService: BookingDataService, private router: Router) { }

  ngOnInit(): void {
    this.logonForm = new FormGroup({
      bookingCode: new FormControl(this.flight.bookingCode, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(6),
      ]),
      familyName: new FormControl(this.flight.familyName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
    });
  }

  onSubmit(flight = { bookingCode: '', familyName: '' }) {
    this.bookingDataService.findPassenger(flight.bookingCode, flight.familyName)
      .then(result => {
        if (result == undefined) {
          localStorage.setItem("loggedIn", "false");
          this.invalidLogon = "Invalid Passenger Info"
        } else {
          localStorage.setItem("loggedIn", "true");
          this.removeInvalidLogon();
          this.router.navigate(['/flight-details'], { queryParams: { bookingCode: flight.bookingCode, familyName: flight.familyName } });
        }
      });
  }

  removeInvalidLogon() {
    this.invalidLogon = ""
  }
}
