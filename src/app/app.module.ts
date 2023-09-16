import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: ListaTarefasComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
