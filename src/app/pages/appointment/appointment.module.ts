import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppointmentComponent } from './appointment.component';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { MenuModule } from 'primeng/menu';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { NgModule } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

const declarations = [
  ListAppointmentComponent,
  AppointmentComponent,
  NewAppointmentComponent,
];

const imports: any = [
  CommonModule,
  MenuModule,
  ButtonModule,
  TableModule,
  HttpClientModule,
  CalendarModule,
  PaginatorModule,
  FormsModule,
  FileUploadModule,
  DropdownModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  bootstrap: [AppointmentComponent],
  // exports: [...declarations, ...imports],
  providers: [AppointmentsService],
})
export class AppointmentModule {}
