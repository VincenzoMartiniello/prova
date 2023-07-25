import { Component } from '@angular/core';
import {  Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

constructor(private title:Title){
  this.title.setTitle("HomePage");
}

}

