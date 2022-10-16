import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

interface SearchInfo {
  suggestion: string;
  suggestionsnippet: string;
  totalhits: number;
}

export interface Item {
  ns: number;
  pageid: number;
  size: number;
  snippet: string;
  timestamp: string;
  title:string;
  wordcount: number;
}

interface Query {
  search: Item[];
  searchInfo: SearchInfo;
}

interface Continue {
  continue: string;
  sroffset: number;
}

interface Response {
  batchcomplete: string;
  continue?: Continue;
  query: Query;
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
    });
  }
}
