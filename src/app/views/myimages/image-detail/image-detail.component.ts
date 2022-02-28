import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'app/services/image.service';
import { Image } from 'app/models/image';
import { AccessibilityService } from 'app/services/accessibility.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  public actualImage: Image;
  public editedImage: Image;
  public actualUsername: string;
  public id: any;
  public editFail: any;

  constructor(private imageService: ImageService, private accessibilityService: AccessibilityService, private _route: ActivatedRoute, private router: Router) {
    this.actualImage = new Image();
    this.editedImage = new Image();
    this.editFail = false;
   }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.actualUsername = localStorage.getItem("username");
    this.imageService.get(this.actualUsername, this.id).subscribe(
      (data) => {
        this.actualImage = data;
        this.editedImage = data;
      },
      (error: Error) => {
        console.error("Error al recuperar la imagen");
      })
      this.accessibilityService.changeColor();
  }

  public submit(): void {
    console.log(this.actualUsername);
    console.log(this.actualImage.title);
    this.imageService.update(this.id, this.editedImage).subscribe(
      (data) => {
        this.editFail = false;
        this.router.navigate(['/images']);
      },
      (error: Error) => {
        this.editFail = true;
        console.error("Error al editar la imagen");
      }
    )
  }

}
