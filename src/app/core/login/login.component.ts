import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceDbService } from '../../service/service-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!:FormGroup;
  name!:string;
  name1:string="ok"
  constructor(private fb:FormBuilder,
               private serviceDbService: ServiceDbService,
               private router: Router) {

      this.form = this.fb.group({
          user: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  login() {
      const val = this.form.value;

       if (val.user && val.password) {

           this.serviceDbService.login()
              .subscribe(
                  (val1) => {
                      if(val1.password==val.password && val1.user==val.user){
                        console.log(val1);
                        this.name="ok";
                        this.name1=null;
                        console.log("User is logged in");
                        this.router.navigateByUrl('/home');}
                      else {
                        alert("utente o password errate");
                      }
                   }
               );
                  }
       else{
                   alert("utente o password non inserite");
       }
      }
  }

