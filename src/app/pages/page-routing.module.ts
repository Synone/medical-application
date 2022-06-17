import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './appointment/appointment.component';
import { CanLoginGuard } from './../shared/guards/canLogInGuard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { NewAppointmentComponent } from './appointment/new-appointment/new-appointment.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate:[CanLoginGuard],
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'doctors',
        component: DoctorComponent,
      },
      {
        path: 'appointment',
        component: AppointmentComponent,
      },
      {
        path: 'new-appointment',
        component: NewAppointmentComponent,
      },
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
