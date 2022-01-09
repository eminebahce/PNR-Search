import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;
  @Output() iconClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.iconClick.emit();
  }
}