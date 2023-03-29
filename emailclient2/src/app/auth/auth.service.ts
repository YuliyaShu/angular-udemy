import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean
}

interface SignupResponse {
  username: string
}

interface SignupCredentials {
  password: string | null,
  passwordConfirmation: string | null,
  username: string | null
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl ='https://api.angular-email.com/auth';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(`${this.rootUrl}/username`, {
      username,
    })
  }

  signup(credentials: Partial<SignupCredentials>) {
    return this.http.post<SignupResponse>(
      `${this.rootUrl}/signup`,
      credentials
    ).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    )
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(`${this.rootUrl}/signedIn`)
    .pipe(
      tap(({ authenticated }) => {
        this.signedin$.next(authenticated);
      })
    );
  }
}
