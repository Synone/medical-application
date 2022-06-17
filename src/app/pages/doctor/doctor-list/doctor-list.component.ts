import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { MenuItem } from 'primeng/api';
import { map } from 'rxjs';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit, OnChanges {
  items!: MenuItem[];
  isActive: boolean = false;
  @Input() DoctorList?: DoctorModel.DoctorInfo[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    const me = this;
    me.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          me.update();
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          me.delete();
        },
      },
    ];
  }
  update() {}

  delete() {}
}
