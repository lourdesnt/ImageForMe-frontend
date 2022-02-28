import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { AccessibilityService } from 'app/services/accessibility.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;
  public loginFail: boolean;
  focus;
  focus1;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
    this.loginFail = false;
    
  }

  ngOnInit(): void {
    
  }

  public submit(): void {
    console.log("User: "+ this.user.username);
    this.userService.login(this.user).subscribe(
      (data) => {
        //console.log(data);
        localStorage.setItem('username', this.user.username);
          this.router.navigate(['/gallery']);
      },
      (error: Error) => {
        this.loginFail = true;
        console.error("Error al realizar el acceso");
      }
    )
  }

}
