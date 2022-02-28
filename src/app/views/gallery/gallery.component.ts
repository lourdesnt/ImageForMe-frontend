import { Component, OnInit } from '@angular/core';
import { AccessibilityService } from 'app/services/accessibility.service';
import { FlickrService } from 'app/services/flickr.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [];
  keyword : string;
  status = false;
  
  constructor(private flickrService: FlickrService, private accessibilityService: AccessibilityService) {}


  ngOnInit(): void {
    this.accessibilityService.changeColor();
  }

  search(event: any){
    this.keyword = event.target.value.toLowerCase();
    if(this.keyword && this.keyword.length>0){
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }

  searchCategory(event:any, category: string){
    this.flickrService.search_keyword(category)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }

  statusFav(item: any, status: boolean) {
    item = status;
  }

}
