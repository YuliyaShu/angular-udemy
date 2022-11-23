import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PhotoResp {
  urls: {
    regular: '';
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<PhotoResp>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 9ci4sK9TMqPpRCJb5ZeGYnhgn4Kp7uIkBEaB18dU_AE',
      }
    });
  }
}
