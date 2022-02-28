import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'app/models/image';
import { AccessibilityService } from 'app/services/accessibility.service';
import { ImageService } from 'app/services/image.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.css']
})
export class NewImageComponent implements OnInit {

  public image: Image;
  public actualUsername: string;
  public uploadFail: boolean;
  focus;
  focus1;
  focus2;

  constructor(private imageService: ImageService, private accessibilityService: AccessibilityService, private router: Router) { 
    this.image = new Image();
    this.uploadFail = false;
    
  }

  ngOnInit(): void {
    this.actualUsername = localStorage.getItem("username");
    this.accessibilityService.changeColor();
  }

  public submit(): void {
    console.log(this.actualUsername);
    console.log(this.image.title);
    this.imageService.create(this.actualUsername, this.image).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/images']);
      },
      (error: Error) => {
        this.uploadFail = true;
        console.error("Error al realizar el registro");
      }
    )
  }

}
