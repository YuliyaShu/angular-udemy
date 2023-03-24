import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator } from "@angular/forms";
import { catchError, map, of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor (private authService: AuthService) {}
  validate(control: AbstractControl) {
    const { value } = control;
    return this.authService.usernameAvailable(value).pipe(
      map(() => null),
      catchError((err) => {
        if (err.status === 422) return of({ nonUniqueUsername: true });
        return of({ anotherError: true});
      }))
  }
}
