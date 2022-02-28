import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ImagesListComponent } from './views/myimages/images-list/images-list.component';
import { NewImageComponent } from './views/myimages/new-image/new-image.component';
import { ImageDetailComponent } from './views/myimages/image-detail/image-detail.component';
import { AccesibilidadComponent } from './views/accesibilidad/accesibilidad.component';

const routes: Routes =[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login',            component: LoginComponent},
    { path: 'register',         component: RegisterComponent},
    { path: 'gallery',          component: GalleryComponent},
    { path: 'images',           component: ImagesListComponent},
    { path: 'images/upload',    component: NewImageComponent},
    { path: 'images/:id',       component: ImageDetailComponent},
    { path: 'profile',          component: ProfileComponent},
    { path: 'accessibility',    component: AccesibilidadComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
