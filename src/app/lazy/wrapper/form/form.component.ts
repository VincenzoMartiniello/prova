import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Utente } from 'src/app/model/utente';
import { ServiceDbService } from 'src/app/service/service-db.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
form!:FormGroup;
utenti: Utente[] = [];

 utente:Utente={
   id:Number(""),
   nome:"",
   cognome:"",
   sesso:"",
   data_di_nascita:new Date(""),
   nazionalita:"",
   sposato:"",
   numero_di_telefono:Number(""),
   indirizzo:""
 };


  constructor(
    private formBuilder: FormBuilder,private servicedDbService: ServiceDbService
  ) {}
  ngOnInit(): void {
     this.initForm();
     this.getUtenti();
  }
  getUtenti(): void {
    this.servicedDbService.getUtenti()
        .subscribe(utenti => this.utenti = utenti);
  }
   initForm() :void{
    this.form = this.formBuilder.group({
      id:'',
      nome:'',
      cognome: '',
      sesso:'Apri questo menu di selezione',
      nazionalita: '',
      indirizzo:'',
      numero_di_telefono:'',
      sposato:'',
      data_di_nascita:undefined
    });
   }

  onReset():void{
    this.form.reset();
  }
 // Metodo per caricare il form con dati casuali
 // onLoad():void {
   // this.form = this.formBuilder.group({
     // nome: 'Vincenzo',
     // cognome: 'Martiniello',
     // sesso:1,
     // nazionalità: 'italiana',
     // indirizzo:'Aversa',
     // numero_di_telefono:'8566',
     // sposato:'False',
     // data_di_nascita:'2023-03-24'
    //});
 // }

 onSearch(){

  this.servicedDbService.form$.next(this.form.value);
}
}

