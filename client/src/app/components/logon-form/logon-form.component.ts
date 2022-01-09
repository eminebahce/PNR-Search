import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-logon-form',
  templateUrl: './logon-form.component.html',
  styleUrls: ['./logon-form.component.scss']
})
export class LogonFormComponent implements OnInit {

  flight = { bookingCode: '', familyName: '' };

  @Input() logonForm: any;
  @Input() invalidLogon!: string;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() removeInvalidLogon = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.formSubmit.emit(this.flight);
  }

  onRemove() {
    this.removeInvalidLogon.emit();
  }

  onBookingCode(event: string) {
    this.flight.bookingCode = event;
    this.onRemove();

  }

  onFamilyName(event: string) {
    this.flight.familyName = event;
    this.onRemove();
  }
}
