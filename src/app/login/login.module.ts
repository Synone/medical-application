import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
const imports: any = [
  LoginRoutes,
  CommonModule,
  ButtonModule,
  FormsModule,
  ReactiveFormsModule,
];
const declarations = [LoginComponent];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class LoginModule {}
