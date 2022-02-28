import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AccesibilidadComponent } from './views/accesibilidad/accesibilidad.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor() { }
    ngOnInit() { 
        localStorage.setItem('accFont', AccesibilidadComponent.NORMAL_FONT);
        localStorage.setItem('accColor', AccesibilidadComponent.NORMAL_COLOR);
    }

}