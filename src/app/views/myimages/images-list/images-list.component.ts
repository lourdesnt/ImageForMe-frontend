import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Image } from 'app/models/image';
import { AccessibilityService } from 'app/services/accessibility.service';
import { ImageService } from 'app/services/image.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">¿Seguro que quieres eliminar?</h4>
    </div>
    <div class="modal-body">
      <p>Una vez eliminado no se podrá recuperar</p>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="delete()">Eliminar</button>
    <button type="button" class="btn btn-default" (click)="activeModal.close('Close click')">Cancelar</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() id;
  
  constructor(private imageService: ImageService, private router: Router, public activeModal: NgbActiveModal) { }

  public delete(event: any): void {
    console.log(this.id);
    this.imageService.delete(this.id).subscribe(
      (data) => {
        this.activeModal.close();
        parent.location.reload();
      },
      (error: Error) => {
        console.error("Error al eliminar la imagen");
      }
    )
  }
}

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

  public images: Image[] = [];
  public actualUsername;

  constructor(private imageService: ImageService, private accessibilityService: AccessibilityService, private modalService: NgbModal, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.actualUsername = localStorage.getItem("username");
    this.listAllImages();
    this.accessibilityService.changeColor();
  }

  listAllImages(): void {
    console.log(this.actualUsername);
    this.imageService.list(this.actualUsername).subscribe(
      (data) => {
        if(data==null){
          this.images=[];
        } else {
          this.images = data;
        }
        console.log(data);
      },
      (error: Error) => {
        console.error("Error al listar las imágenes");
      })
  }

  open(id: any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = id;
  }

}
