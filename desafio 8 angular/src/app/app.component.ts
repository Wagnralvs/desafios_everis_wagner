import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ɵangular_packages_forms_forms_bm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-contact-us';
  nome = '';
  email = '';
  subject = '';
  message = '';

  @HostListener('window:resize', ['$event'])
onResize(event:any) {
 console.log(event.target.innerWidth );
}


Validator(Input: FormControl){
  return (Input.value? null: {obrigatorio: true});
  }


  usuario:any;


  
}

  
