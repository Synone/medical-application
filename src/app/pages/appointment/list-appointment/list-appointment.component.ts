import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { catchError, of, takeUntil } from 'rxjs';

import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { ListItem } from './list-item';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss'],
})
export class ListAppointmentComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  listItems!: ListItem[];


  onDestroy(): void {
    const me = this;
    alert('Leave this page?');
    console.log(me.listItems);
  }
  constructor(private appointService: AppointmentsService) {
    super();
  }

  ngOnInit() {
    const me = this;
    me.appointService
      .getListAppoint()
      .pipe(takeUntil(me.destroy$))
      .subscribe({
        next: (listItem: any) => {
          me.listItems = listItem.data;
        },
        error: (err)=>{
          console.log('This is err', err);
        }
      });
  }
}
