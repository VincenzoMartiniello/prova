import { group } from '@angular/animations';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit{
//  data1=['A','B','C'];
 // data2=['x','y','z'];
//  data3=['1','2','3'];

data1:string[]=["A","B","C"];
operatore:object={
  A:["y"],
  B:["x"],
  C:["z"]
};
valore:object={
  A:["3"],
  B:["2"],
  C:["1"]
};
  currentData = this.data1[0];
   currentData1 = this.operatore[this.currentData];
   currentData2 = this.valore[this.currentData];


  orderForm = this.formBuilder.group({
     groups: this.formBuilder.array([])
  });
  constructor(
    private formBuilder: FormBuilder, private title: Title
  ) {
    this.title.setTitle("FormArray");
  }




  ngOnInit() {
    // this.orderForm = new FormGroup({
    //   items: new FormArray([])
    // });
  }
  groups(): FormArray {
    return this.orderForm.controls["groups"] as FormArray;
  }
  newGroup(): FormGroup {
    return this.formBuilder.group({
     criterias: this.formBuilder.array([])
    })
  }
  criterias(i: number): FormArray {
    return this.groups().at(i).get("criterias") as FormArray;
  }
  newCriteria():FormGroup{
    return this.formBuilder.group({
      indicatore:this.currentData,
      operatore:this.currentData1,
      valore:this.currentData2,
     })
     }
  addGroup() {
    this.groups().push(this.newGroup());
  }
  addCriteria(i: number) {
    this.criterias(i).push(this.newCriteria())
  }
  removeGroup(i: number) {
    this.groups().removeAt(i);
  }
  removeCriteria(i: number, j: number) {
    this.criterias(i).removeAt(j)
  }

  onSave() {
    console.log(JSON.stringify(this.orderForm.value));
  }

  changeData(i:number,j:number,item:any) {
    let newData = item.value.indicatore;
    if (newData != this.currentData) {
      this.currentData = newData;
      this.currentData1 = this.operatore[this.currentData];
      this.currentData2 = this.valore[this.currentData];


      //this.criterias(i).at(j).patchValue({
        this.orderForm.get("groups")["controls"][i].get("criterias")["controls"][j].setValue({
         indicatore:this.currentData,
         operatore:this.currentData1,
         valore:this.currentData2
        });

    }
  }

}

