import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">¿Seguro que quieres eliminar tu cuenta?</h4>
    </div>
    <div class="modal-body">
      <p>Una vez eliminada no se podrá recuperar</p>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="delete()">Eliminar</button>
    <button type="button" class="btn btn-default" (click)="activeModal.close('Close click')">Cancelar</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() username;
  
  constructor(private userService: UserService, private router: Router, public activeModal: NgbActiveModal) { }

  public delete(event: any): void {
    this.userService.delete(this.username).subscribe(
      (data) => {
        localStorage.setItem('username', '');
        this.activeModal.close();
        this.router.navigate(['/login']);
      },
      (error: Error) => {
        console.error("Error al eliminar la cuenta");
      }
    )
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public actualUser: User;
  public editedUser: User;
  public actualUsername: string;
  public updateFail: boolean;
  public editOk: boolean;

  constructor(private userService: UserService, private modalService: NgbModal, private router: Router) { 
    this.actualUser = new User();
    this.editedUser = new User();
    this.updateFail = false;
    this.editOk = false;
  }

  ngOnInit(): void {
    this.actualUsername = localStorage.getItem("username");
    this.userService.getUser(this.actualUsername).subscribe(
      (data) => {
        console.log(data);
        this.actualUser = data;
        this.editedUser = data;
      },
      (error: Error) => {
        console.error("Error al recuperar el usuario");
      }
    );
  }

  public submit(): void {
    console.log(this.editedUser);
    this.userService.update(this.actualUsername, this.editedUser).subscribe(
      (data) => {
        this.actualUsername = this.editedUser.username
        localStorage.setItem('username', this.editedUser.username);
        this.editOk = true;
        this.updateFail = false;
      },
        (error: Error) => {
          this.editOk = false;
          this.updateFail = true;
          console.error("Error al cambiar los datos");
      }
    )
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.username = this.actualUsername;
  }

}
