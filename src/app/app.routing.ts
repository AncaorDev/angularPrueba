import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { CursoComponent } from './curso/curso.component';

const ROUTES: Routes = [
   // { path: '', component : AppComponent},
   { path: 'persona', component : PersonaComponent},
   { path: 'curso', component : CursoComponent},
   { path: '**', component : AppComponent}
   
];

@NgModule({
imports: [RouterModule.forRoot(ROUTES)],
exports: [RouterModule]
})

export class AppRoutingModule { }