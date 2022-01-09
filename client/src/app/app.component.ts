import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navbarTitle!: String;

  constructor(private router: Router) { }

  hasRoute(route: String) {
    return this.router.url === route;
  }
}
