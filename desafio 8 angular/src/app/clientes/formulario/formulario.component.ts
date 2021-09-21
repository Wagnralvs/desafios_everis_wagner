import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Clientes } from '../shared/clientes';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 formulario: FormGroup = new FormGroup({
  Nome: new FormControl(null),
  email: new FormControl(null),
  subject: new FormControl(null),
  message: new FormControl(null),
});
  constructor() { }

  usuario: any ={
    nome: '',
    email: '',
  }
  ngOnInit(): void {
   this.usuario={};
  }

 

  onSubmit(form: any){
    console.log(form);

    console.log(this.usuario)
  }
  
 
}




