import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-header',
  templateUrl: './flight-header.component.html',
  styleUrls: ['./flight-header.component.scss']
})
export class FlightHeaderComponent implements OnInit {

  @Input() passengerName!: string;
  @Input() passengerLastName!: string;
  @Input() passengerTitle!: string;
  @Input() bookingCode!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.setItem("loggedIn", "false");
    this.router.navigate(['']);
  }

}
