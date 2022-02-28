import { Component, OnInit } from '@angular/core';
import { AccessibilityService } from 'app/services/accessibility.service';

@Component({
  selector: 'app-accesibilidad',
  templateUrl: './accesibilidad.component.html',
  styleUrls: ['./accesibilidad.component.css']
})
export class AccesibilidadComponent implements OnInit {

  public static CONTRAST_COLOR: string = '#5cb85c';
  public static NORMAL_COLOR: string = '#5bc0de';

  public static PLUS_FONT: string = '2';
  public static NORMAL_FONT: string = '-2';

  constructor(private accessibilityService: AccessibilityService) { }

  ngOnInit(): void {
    this.accessibilityService.changeColor();
    //this.accessibilityService.changeTextSize();
  }

  changeAccColor(): void {
    if(localStorage.getItem('accColor') == AccesibilidadComponent.CONTRAST_COLOR){
      localStorage.setItem('accColor', AccesibilidadComponent.NORMAL_COLOR);
    } else {
      localStorage.setItem('accColor', AccesibilidadComponent.CONTRAST_COLOR);
    }
    this.accessibilityService.changeColor();
  }

  changeAccTextSize(): void {
    console.log("cambio de tamaño de letra");
    if(localStorage.getItem('accFont') == AccesibilidadComponent.PLUS_FONT){
      localStorage.setItem('accFont', AccesibilidadComponent.NORMAL_FONT);
    } else {
      localStorage.setItem('accFont', AccesibilidadComponent.PLUS_FONT);
    }

    this.accessibilityService.changeTextSize();
  }
}
