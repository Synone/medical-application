import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ValidatorService } from '../shared/services/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[ValidatorService]
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private _route: Router, private vldt: ValidatorService) {}
  loginForm!: FormGroup;
  fieldKeyName = {
    staffId: 'staffId',
    staffPassword: 'staffPassword',
  };

  errorMs: any = {
    required: 'Please enter this field',
  };
  ngOnInit() {
    const me = this;
    me.initForm();
  }
  submitLoginForm(): void {
    const me = this;
    const isValid = me.loginForm.valid;

    me.loginForm.markAllAsTouched();
    me.loginForm.markAsDirty();
    me.loginForm.updateValueAndValidity();
    Object.keys(me.loginForm.controls).map((controlName) => {
      const control = me.loginForm.get(controlName);
      control?.markAsDirty();
      control?.markAllAsTouched();
      control?.updateValueAndValidity();
    });

    const formValue = me.loginForm.getRawValue();
    console.log(formValue);
    if (!isValid) {
      me.focusInvalidElement();
      return;
    }
    me._route.navigate(['dashboard']);
  }
  public isValidControl(controlName: string): boolean {
    const me = this;
    return me.vldt.isValidControl(controlName, me.loginForm)
  }
  
  focusInvalidElement() {
    const listElement = document.querySelectorAll('input.ng-invalid');
    for (let i = 0; i < listElement.length; i++) {
      (listElement.item(i) as HTMLElement)?.focus();
      return;
    }
  }
  getErrorMs(controlName: string): string[] {
    const me = this;
    return me.vldt.getErrorMessages(controlName,me.loginForm, me.errorMs)
  }

  initForm() {
    const me = this;

    me.loginForm = me.fb.group({
      [me.fieldKeyName.staffId]: ['', [Validators.required]],
      [me.fieldKeyName.staffPassword]: ['', [Validators.required]],
    });
  }
}
