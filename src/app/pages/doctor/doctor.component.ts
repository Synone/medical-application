import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base.component';
// import { AnyForUntypedForms } from '@angular/forms';

import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent extends BaseComponent implements OnInit {
  doctorList?: DoctorModel.DoctorInfo[];
  onDestroy() {
    console.log(this.doctorList);
  }
  constructor(private doctorService: DoctorService) {
    super();
  }
  addDoctor(): void {}
  ngOnInit() {
    const me = this;
    me.doctorService
      .getDoctors()
      .pipe(takeUntil(me.destroy$))
      .subscribe((doctor: any) => {
        me.doctorList = doctor.data;
      });
  }
}
