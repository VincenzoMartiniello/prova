import { Component, Injectable, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']

})
export class NumbersComponent implements OnInit {
  constructor(private title:Title){
    this.title.setTitle("Numbers");
  }
myArray:string[]=["1","2","3","4","5","6"];

data:string='';
 ngOnInit(){
  }


  getRandomDifferent(){
// Primo metodo
    var tmp, current, top = this.myArray.length;
     while(top--) {

      current = Math.floor(Math.random() * (top + 1));
      tmp = this.myArray[current];
      this.myArray[current] = this.myArray[top];
      this.myArray[top] = tmp;
    }
      console.log("Primo metodo: ",this.myArray);
// Secondo metodo
    let set = new Set();
while (set.size < 6) {
  set.add(Math.floor(Math.random() * 6 )+1);
}
let randomArray = [...set];
    console.log("Secondo metodo: ",randomArray)

  }

  }


