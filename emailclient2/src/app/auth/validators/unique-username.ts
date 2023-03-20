import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor (private http: HttpClient) {}
  validate = async (control: AbstractControl) => {
    const { value } = control;
    console.log(this.http);
    return null;
  }
}
