import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,Subject,of} from 'rxjs';
import { Utente } from '../model/utente';

@Injectable({
  providedIn: 'root',
})

export class ServiceDbService {
  private dataUrl = 'http://localhost:3000/listUtenti';  // URL to web api
  private dataUrl1 ='http://localhost:3000/list1';  // URL to web api
  private dataUrl2 ='http://localhost:3000/list2';  // URL to web api
  private dataUrl3 ='http://localhost:3000/list3';  // URL to web api
  private dataUrl4 ='http://localhost:3000/profile';

  public form$:Subject<Utente> = new Subject();
  //private data$=this.subject.asObservable();
// API url
  baseApiUrl = 'http://localhost:3200/api/upload';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // httpOptions1 = {
  //   headers: new HttpHeaders({'Content-Type': 'application/file'})

  //  };
  //  Metodo per la gestione degli errori
  private handleError<T>( result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //Metodo richiamato dal form component che assegna l'utente del form al subject
  // search(utente:Utente){
  //   this.subject.next(utente);
  // }

  //Metodo che ritorna il form riempito alla tabella
  // getUtente3(): Observable<Utente>{
  //   return this.data$;
  // }
// metodo per la login
login():Observable<any> {
    return this.http.get<any>(this.dataUrl4);}

getUtenti(): Observable<Utente[]> {return this.http.get<Utente[]>(this.dataUrl);}

/** DELETE: delete the utent from the server */
deleteUtente(id: number): Observable<Utente> {
  const url = `${this.dataUrl}/${id}`;
  return this.http.delete<Utente>(url, this.httpOptions)
    }

 /** PUT: update the utente on the server */
updateUtente(utente: Utente,id:number): Observable<any> {
  const url = `${this.dataUrl}/${id}`;
  return this.http.put(url, utente, this.httpOptions);
}
/** GET utente by id */
getUtente(id: number): Observable<Utente> {
  const url = `${this.dataUrl}/${id}`;
  return this.http.get<Utente>(url);
}
// GET utenti by string
getUtentiFiltrato(data: any): Observable<Utente[]> {
  const url = `${this.dataUrl}`;
  let queryParams=new HttpParams();
  //  if(data.nome !=""){
  //     queryParams=queryParams.append("nome",data.nome)
  //  }
  //  if(data.cognome !=""){
  //     queryParams=queryParams.append("cognome",data.cognome)
  //  }
  //  if(data.sesso !=""){
  //     queryParams=queryParams.append("sesso",data.sesso)
  //  }
  //  if(data.nazionalita !=""){
  //     queryParams=queryParams.append("nazionalita",data.nazionalita)
  //  }
  //  if(data.indirizzo!=""){
  //     queryParams=queryParams.append("indirizzo",data.indirizzo)
  //  }
  //  if(data.numero_di_telefono!=""){
  //     queryParams=queryParams.append("numero_di_telefono",data.numero_di_telefono)
  //  }
  //  if(data.data_di_nascita!=null){
  //     queryParams=queryParams.append("data_di_nascita",data.data_di_nascita)
  //  }
  //  if(data.sposato!=""){
  //     queryParams=queryParams.append("sposato",data.sposato)
  //  }
   for (var k in data){
     if(data[k] !=""&& data[k] !="Apri questo menu di selezione" && data[k] !=null){
      queryParams=queryParams.append(k,data[k])
     }
   }
   return this.http.get<Utente[]>(url,{params:queryParams});
}
//  Metodo che ritorna la prima lista
getLista1(): Observable<any> {
  return this.http.get<any>(this.dataUrl1);}

 //  Metodo che ritorna la seconda lista
getLista2(): Observable<any> {
  return this.http.get<any>(this.dataUrl2);}

  //  Metodo che ritorna la terza lista
getLista3(): Observable<any> {
  return this.http.get<any>(this.dataUrl3);}

 // Returns an observable
 upload(file):Observable<any> {

  // Create form data
  const formData = new FormData();
  // Store form name as "file" with file data
  formData.append("file", file, file.name);

  // Make http post request over api
  // with formData as req
  return this.http.post(this.baseApiUrl, formData)
}

}
