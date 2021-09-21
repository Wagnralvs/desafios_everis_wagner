import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import{ FormsModule }from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './clientes/formulario/formulario.component';
 import {HttpClient, HttpClientModule} from'@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  usuarioUrl= 'http://localhost:3000/contact-us';
  http: any;

 
 reat(usuario:any){
return this.http.post(this.usuarioUrl, usuario)
 }

 }


