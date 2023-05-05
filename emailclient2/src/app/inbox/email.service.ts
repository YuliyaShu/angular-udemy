import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface EmailSummary {
  id: string;
  subject: string;
  from: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl ='https://api.angular-email.com/emails';

  constructor(private http: HttpClient) { }

  getEmails(): Observable<EmailSummary[]> {
    return this.http.get<EmailSummary[]>(this.rootUrl)
  }
}
