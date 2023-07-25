import { Component,DoCheck, Input, OnInit,OnDestroy, SimpleChange, ChangeDetectorRef, ChangeDetectionStrategy, AfterContentChecked } from '@angular/core';
import { concatAll, concatMap, delay, skipWhile, takeWhile, skip, switchMap, mergeMap } from 'rxjs/operators';
import { ServiceDbService } from 'src/app/service/service-db.service';
import { Utente } from 'src/app/model/utente';
import { FormBuilder} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { EMPTY,from,of, catchError, tap} from 'rxjs';
@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css'],
})
export class TabellaComponent implements OnInit{
  utenti: Utente[] = [];
  utente1!:Utente;
  utente3!:any;
  selectedUtente=1;
  form2!:FormGroup;
  initForm() :void{
    this.form2 = this.formBuilder.group({
      id:'',
      nome:'',
      cognome: '',
      sesso:'',
      nazionalita: '',
      indirizzo:'',
      numero_di_telefono:'',
      sposato:'',
      data_di_nascita:''
    });
   }
  utente2:Utente={
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
  constructor(private servicedDbService: ServiceDbService,private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.getUtenti();
    this.initForm();
    this.getUtentiFiltrato();
  }

// Metodo  che filtra la tabella
  getUtentiFiltrato(){
   this.servicedDbService.form$.pipe(tap((v) => console.log("form dal componente", v)),switchMap(res => this.servicedDbService.getUtentiFiltrato(res)))
   .subscribe(h =>this.utenti=h);
  }
    // // if(this.utente3 !=undefined ){
    // //   setTimeout(() => {
    // //     this.getUtenti4();
    // //     console.log(this.utente3);

    // //   }, 500);




    //   }

  //Metodo che restituisce tutti gli utenti
  getUtenti(): void {
    this.servicedDbService.getUtenti()
    // .pipe(
    //   catchError((e,c) => {
    //     console.log("error",e);
    //     console.log("caught",c)
    //     return EMPTY;
    //   })
    // )
    .subscribe(utenti => this.utenti = utenti);
  }

  //Metodo che restitusce il singolo utente
 onDetail():void{
  this.servicedDbService.getUtente(this.selectedUtente)
      .subscribe(h => this.utente = h);
 }
  //Metodo che cancella l'utente
  onDelete(): void {
    this.utenti = this.utenti.filter(h => h.id!==this.selectedUtente);
    this.servicedDbService.deleteUtente(this.selectedUtente).subscribe();
  }


  //Metodo che precarica il form
  onEdit(): void {
    this.form2.patchValue(this.utente1);
  }

  //Metodo che modifica l'utente
  onSave(){
       this.servicedDbService.updateUtente(this.form2.value,this.selectedUtente)
           .subscribe();
            setTimeout(() => {
               this.getUtenti();
             }, 500);

      }
  //Metodo che filtra la tabella con una richiesta get
//  getUtenti4() :void {
//     if(this.utente3.id == ""){
//       delete this.utente3.id;
//     }
//     if(this.utente3.nome == ""){
//       delete this.utente3.nome;
//     }
//     if(this.utente3.cognome == ""){
//       delete this.utente3.cognome;
//     }
//     if(this.utente3.sesso == ""){
//       delete this.utente3.sesso;
//     }
//     if(this.utente3.nazionalita == ""){
//       delete this.utente3.nazionalita;
//     }
//     if(this.utente3.indirizzo == ""){
//       delete this.utente3.indirizzo;
//     }
//     if(this.utente3.indirizzo == ""){
//       delete this.utente3.indirizzo;
//     }
//     if(this.utente3.numero_di_telefono == 0){
//       delete this.utente3.numero_di_telefono;
//     }
//     if(this.utente3.data_di_nascita == null){
//       delete this.utente3.data_di_nascita;
//     }
//     if(this.utente3.sposato == ""){
//       delete this.utente3.sposato;
//     }
//     this.data="?" + JSON.stringify(this.utente3).replaceAll(":","=").replaceAll(",","&").replace(/{/, '').replace(/}/, '').replaceAll('"','');
//     this.servicedDbService.getUtenti4(this.data).subscribe(h => this.utenti=h);

//   }
//  getUtenti4(utente3:any):void{
//    const data= JSON.stringify(utente3,null,2);
//    this.servicedDbService.getUtenti4(data).subscribe(h => this.utenti=h);
//  }
  //Metodo che filtra la tabella
// ngDoCheck():void{
//   if(this.utente3!=undefined){
//     this.servicedDbService.getUtenti4(this.utente3).subscribe(h => this.utenti=h);;
//     this.utente3=undefined;
// }
//  if(this.utente3!=undefined){
//      this.utenti=this.utenti.filter(h => (h.nome==this.utente3.nome || this.utente3.nome=="") && (h.cognome==this.utente3.cognome || this.utente3.cognome=="") && (h.indirizzo==this.utente3.indirizzo || this.utente3.indirizzo==="") && (h.sposato==this.utente3.sposato || this.utente3.sposato=="") && (h.nazionalita==this.utente3.nazionalita || this.utente3.nazionalita=="") && (h.data_di_nascita==this.utente3.data_di_nascita || this.utente3.data_di_nascita==null ) && (h.sesso==this.utente3.sesso || this.utente3.sesso=="") && (h.numero_di_telefono==this.utente3.numero_di_telefono || this.utente3.numero_di_telefono==0)) ;
// }

// if(this.utente3 !=undefined){
//    const observableFiltrato=this.servicedDbService.getUtenti().pipe(concatMap(h => from(h)),filter(h => (h.nome==this.utente3.nome || this.utente3.nome=="") && (h.cognome==this.utente3.cognome || this.utente3.cognome=="") && (h.indirizzo==this.utente3.indirizzo || this.utente3.indirizzo==="") && (h.sposato==this.utente3.sposato || this.utente3.sposato=="") && (h.nazionalita==this.utente3.nazionalita || this.utente3.nazionalita=="") && (h.data_di_nascita==this.utente3.data_di_nascita || this.utente3.data_di_nascita==null ) && (h.sesso==this.utente3.sesso || this.utente3.sesso=="") && (h.numero_di_telefono==this.utente3.numero_di_telefono || this.utente3.numero_di_telefono==0)),toArray() )
//    .subscribe(data => this.utenti=data);
// }
// if(this.utente3 != undefined){
 //  this.getUtenti4();
 //  this.utente3=undefined;

}

