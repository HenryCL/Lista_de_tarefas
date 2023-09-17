import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './pages/lista-tarefas/lista-tarefas.component';
import { HeaderComponent } from './components/header/header.component';
import { appRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: '', component: ListaTarefasComponent },
  { path: '', component: HeaderComponent }

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
    RouterModule,
    appRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
