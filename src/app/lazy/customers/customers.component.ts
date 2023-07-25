
import { AfterViewChecked, AfterViewInit, Component,EventEmitter,OnDestroy,OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Subscription, debounceTime, fromEvent, map, startWith } from 'rxjs'
import { ElementRef } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit,AfterViewInit,OnDestroy{
  //orderForm!: FormGroup;
  //items!: FormArray;
  i:any=0;
  subscribe!:Subscription;
  @ViewChildren('toTarget')
  toTarget!: QueryList<ElementRef>;
  orderForm = this.formBuilder.group({

    items: this.formBuilder.array([])
});
  constructor(
    private formBuilder: FormBuilder,private title:Title
  ) {
    this.title.setTitle("Forms");
  }
  ngAfterViewInit(): void {

  }


  ngOnInit() {
    // this.orderForm = new FormGroup({
    //   items: new FormArray([])
    // });
  }
  // initForm() :void{
  //   this.orderForm= this.formBuilder.group({
  //     id:'',
  //     nome:'',
  //     cognome: '',
  //     sesso:'Apri questo menu di selezione',
  //     numero_di_telefono:'',
  //     data_di_nascita:undefined,
  //     forms: this.formBuilder.array([])
  //   });
  //  }

  //  createForm(): FormGroup {
  //   return this.formBuilder.group({
  //     id:this.i,
  //     nome:'',
  //     cognome: '',
  //     sesso:'Apri questo menu di selezione',
  //     numero_di_telefono:'',
  //     data_di_nascita:undefined,
  //   });
  // }
  // addForm(): void {
  //   this.i=this.i+1;
  //   this.items = this.orderForm.get('items') as FormArray;
  //   this.items.push(this.createForm());

  // }
  get items() {
    return this.orderForm.controls["items"] as FormArray;
  }
  addForm() {
    this.i=this.i+1;
    const item = this.formBuilder.group({
      id:this.i,
      nome:'',
      cognome: '',
      sesso:'Apri questo menu di selezione',
      numero_di_telefono:'',
      data_di_nascita:undefined,
    });

    this.items.push(item);
  }
   deleteForm(){
   this.items.removeAt(this.items.length-1);
   this.i=this.i-1;
   }

  onSend(i:number){
    console.log("Form numero: ",i+1);
    this.toTarget.forEach((e) => console.log(e));

  }
  ngOnDestroy(){
  }
}

