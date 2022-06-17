import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {
    constructor(){

    }
    // functions to use in many forms
    isValidControl(controlName:string, form:FormGroup):boolean{
        const control = form.get(controlName);
        if(!control){
            return false;
        }
        return control.invalid && (control.touched || control.dirty)
    }
    getErrorMessages(controlName:string, form:FormGroup, errorsList:any):string[]{
        let errorObject = form.get(controlName)?.errors;
        if(!errorObject) return [];
        let errorKeys = Object.keys(errorObject || {});
        if(errorKeys.length === 0) return [];
        const messagesArray = errorKeys.map((key)=>{
            return errorsList[key]
        });
        return messagesArray
    }
}