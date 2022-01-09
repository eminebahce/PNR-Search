import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LogonComponent } from './components/logon/logon.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogonHeaderComponent } from './components/logon-header/logon-header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LogonFormComponent } from './components/logon-form/logon-form.component';
import { LogonFormGroupComponent } from './components/logon-form-group/logon-form-group.component';
import { FlightHeaderComponent } from './components/flight-header/flight-header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    FlightDetailsComponent,
    NavbarComponent,
    LogonHeaderComponent,
    LogonFormComponent,
    LogonFormGroupComponent,
    FlightHeaderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
