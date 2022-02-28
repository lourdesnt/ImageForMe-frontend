import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './views/gallery/gallery.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { UserService } from './services/user.service';
import { ProfileComponent } from './views/profile/profile.component';
import { NewImageComponent } from './views/myimages/new-image/new-image.component';
import { ImagesListComponent } from './views/myimages/images-list/images-list.component';
import { ImageDetailComponent } from './views/myimages/image-detail/image-detail.component';
import { AccesibilidadComponent } from './views/accesibilidad/accesibilidad.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ImagesListComponent,
    GalleryComponent,
    RegisterComponent,
    ProfileComponent,
    ImageDetailComponent,
    NewImageComponent,
    AccesibilidadComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login',            component: LoginComponent},
    { path: 'register',         component: RegisterComponent},
    { path: 'gallery',          component: GalleryComponent},
    { path: 'images',           component: ImagesListComponent},
    { path: 'images/upload',    component: NewImageComponent},
    { path: 'images/:id',       component: ImageDetailComponent},
    { path: 'profile',          component: ProfileComponent},
    { path: 'accessibility',    component: AccesibilidadComponent}
  ]),
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
