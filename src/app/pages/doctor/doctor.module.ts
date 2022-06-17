import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { CardModule } from 'primeng/card';
import { IconModule } from 'src/assets/icons/icon.module';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorService } from 'src/app/shared/services/doctor.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorRoutes } from './doctor.routing';
const imports: any = [
  CardModule,
  IconModule,
  MenuModule,
  ButtonModule,
  // DoctorsRoutes,
  DoctorRoutes,
  SharedModule,
];
const declarations = [DoctorComponent, DoctorListComponent];
@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...declarations, ...imports],
  bootstrap: [DoctorComponent],
  providers: [DoctorService],
})
export class DoctorModule {}
