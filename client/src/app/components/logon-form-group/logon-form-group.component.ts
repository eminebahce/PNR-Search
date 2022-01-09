import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logon-form-group',
  templateUrl: './logon-form-group.component.html',
  styleUrls: ['./logon-form-group.component.scss']
})
export class LogonFormGroupComponent implements OnInit {

  @Input() logonForm: any;
  @Input() name!: string;
  @Input() label!: string;
  @Input() patternMatch!: string;
  @Output() onTypeInput = new EventEmitter();
  @Input() fieldObject: any;
  @Input() requiredMessage!: string;
  @Input() minMessage!: string;
  @Input() maxMessage!: string;
  @Input() patternMessage!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(event: any) {
    this.onTypeInput.emit(event.target.value);
  }

}