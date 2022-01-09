import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogonComponent } from './components/logon/logon.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LogonComponent },
  { path: 'flight-details', component: FlightDetailsComponent, canActivate: [AuthGuardService] },
  { path: '**', component: LogonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
