import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {

  constructor() { }

  public changeColor(): void {
    var navbar = document.getElementsByTagName('nav')[0] as HTMLElement;
    navbar.style.backgroundColor = localStorage.getItem('accColor');

    var elements = document.querySelectorAll('.acc-color');
    for(var i in elements){
      if(elements[i] != undefined && (elements[i] as HTMLElement).style != undefined){
        (elements[i] as HTMLElement).style.backgroundColor = localStorage.getItem('accColor');
      }
    }
  }

  public changeTextSize(): void {
    var texts = document.querySelectorAll('*');
    var textsize = parseFloat(localStorage.getItem('accFont'));
    for(var i in texts){
      var innerText = (texts[i] as HTMLElement).innerText;
      if(innerText != undefined && innerText.length>0){
         var style = window.getComputedStyle((texts[i] as HTMLElement)).getPropertyValue('font-size');
         var fontSize = parseFloat(style);
         (texts[i] as HTMLElement).style.fontSize = (fontSize + textsize) + 'px';
      }
    }
  }
}
