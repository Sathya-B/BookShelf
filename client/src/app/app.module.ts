import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddBookComponent } from './addbook/addbook.component';
import { ViewBooksComponent } from './viewbooks/viewbooks.component';
import { BookitemComponent } from './viewbooks/bookitem/bookitem.component';
import { UpdateBookComponent } from './updatebook/updatebook.component';
import { Routes } from '@angular/Router'
import { RouterModule } from '@angular/Router';
import { AppRoutingModule } from './routing/app-routing-module';
import { ApiServices } from './services/apiservices';
import { UpdateDeleteServ } from './services/updatedeleteservice';
import { BookDetails } from './models/book.model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule, BusyDirective } from 'angular2-busy';
import {Subscription} from 'rxjs';
import '@angular/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AddBookComponent,
    ViewBooksComponent,
    UpdateBookComponent,
    BookitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    BrowserAnimationsModule,
    BusyModule,
  ],
  providers: [ApiServices, UpdateDeleteServ, BookDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
