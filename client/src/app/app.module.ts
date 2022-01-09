import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LogonComponent } from './components/logon/logon.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogonHeaderComponent } from './components/logon-header/logon-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    FlightDetailsComponent,
    NavbarComponent,
    LogonHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
