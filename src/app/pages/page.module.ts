import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { AppointmentModule } from './appointment/appointment.module';
import { DashBoardModule } from './dashboard/dashboard.module';
import { DoctorModule } from './doctor/doctor.module';
import { PageRoutingModule } from './page-routing.module';
const imports = [
  PageRoutingModule,
  CommonModule,
  DashBoardModule,
  DoctorModule,
  AppointmentModule,
];
const declarations = [LayoutComponent];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
})
export class PageModule {}
