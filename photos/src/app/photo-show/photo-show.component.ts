import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})


export class PhotoShowComponent implements OnInit {
  imgUrl = '';
  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((resp) => {
      if (resp.urls) {
        this.imgUrl = resp.urls.regular;
      }
    });
  }
}
