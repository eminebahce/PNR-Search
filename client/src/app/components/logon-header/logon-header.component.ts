import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logon-header',
  templateUrl: './logon-header.component.html',
  styleUrls: ['./logon-header.component.scss']
})
export class LogonHeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }
    
}