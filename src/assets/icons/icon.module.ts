// import { Appoint, Call, Chats, DashBoard, Department, Doctor, Patients, logoSVG } from "./svg/logo";

import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [AngularSvgIconModule.forRoot({})],
  declarations: [],
  exports: [AngularSvgIconModule],
})
export class IconModule {}
