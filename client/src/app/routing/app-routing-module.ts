import { AppComponent } from '../app.component';
import { NgModule, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { AddBookComponent } from '../addbook/addbook.component';
import { ViewBooksComponent } from '../viewbooks/viewbooks.component';
import { UpdateBookComponent } from '../updatebook/updatebook.component';
import { Routes } from '@angular/Router'
import { RouterModule } from '@angular/Router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
  { path: 'addbook', component: AddBookComponent},
  { path: 'viewbooks', component: ViewBooksComponent},
  { path: 'updatebook', component: UpdateBookComponent}
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }