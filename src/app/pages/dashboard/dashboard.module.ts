import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartComponent } from './chart/chart.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardPatientsListComponent } from './dashboard-patients-list/dashboard-patients-list.component';
import { DashboardRoutes } from './dashboard.routing';
import { DashboardTopDoctorsComponent } from './dashboard-top-doctors/dashboard-top-doctors.component';
import { IconModule } from 'src/assets/icons/icon.module';
import { NgModule } from '@angular/core';

const imports: any = [CommonModule,IconModule, DashboardRoutes];
const declarations = [DashboardComponent, ChartComponent, ChartBarComponent,DashboardPatientsListComponent, DashboardTopDoctorsComponent];

@NgModule({
  imports: [imports],
  declarations: [declarations],
  exports: [...imports, ...declarations],
  providers: []
})
export class DashBoardModule {}
