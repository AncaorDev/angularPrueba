import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { CursoComponent } from './curso/curso.component';
import { PermisosComponent } from './permisos/permisos.component';
import { PruebaComponent } from './prueba/prueba.component';
import { AppRoutingModule } from './app.routing';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CursoComponent,
    PermisosComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
