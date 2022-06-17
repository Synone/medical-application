import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
  constructor(private router: Router) {}
  cities!: City[];
  selectedCity1!: City;
  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  newAppoint(): void {
    this.router.navigate(['new-appointment']);
  }
}
