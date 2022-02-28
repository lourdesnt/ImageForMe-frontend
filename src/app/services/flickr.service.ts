import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

export interface FlickrPhoto {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
  favorite: boolean;
}

export interface FlickrOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private http: HttpClient) { }

  search_keyword(keyword: string){
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1`;

    return this.http.get(url + params).pipe(map((res: FlickrOutput) => {
      const urlArr = [];
      res.photos.photo.forEach((ph: FlickrPhoto) => {
        const photoObj = {
          url: `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.jpg`,
          title: ph.title
        };
        urlArr.push(photoObj);
      });
      return urlArr;
    }));
  }
}
