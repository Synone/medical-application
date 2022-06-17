import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, catchError, of, throwError } from 'rxjs';

import { ListItem } from '../../pages/appointment/list-appointment/list-item';

@Injectable()
export class AppointmentsService {
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  appointmentsList = new Subject<ListItem[] | any>();

  constructor(private http: HttpClient) {}

  initList: any;
  apptList: Observable<any> = this.http.get(
    '../../../assets/data/patients.json'
  );
  getListAppoint() {
    const me = this;
    return me.http.get<ListItem[]>('../../../assets/data/patients.json').pipe(catchError((err) => {
      return throwError(() => new Error('something wemt wrong'))
    }));
  }

  createAppointment(appoint: any) {
    const me = this;
  }
}
