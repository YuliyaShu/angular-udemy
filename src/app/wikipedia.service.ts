import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs';

export interface Item {
  ns: number;
  pageId: number;
  size: number;
  snippet: string;
  timestamp: string;
  title:string;
  wordCount: number;
}

interface Response {
  query: {
    search: Item[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get<Response>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      }
    }).pipe(
      map(x => x?.query?.search),
    );
  }
}
