import { Component, OnInit } from '@angular/core';
import { BookitemComponent } from './bookitem/bookitem.component';
import { Book, BookDetails } from '../models/book.model';
import { ApiServices } from '../services/apiservices';
import { UpdateDeleteServ } from '../services/updatedeleteservice';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewBooksComponent implements OnInit {
  listOfBooks: Book[];
  book: Book;
  busy: Promise<any>;
  constructor(private apiServices: ApiServices, private modal: Modal, private updateDeleteServ: UpdateDeleteServ) {

  this.updateDeleteServ.updateBook.subscribe(
    (emitted: boolean) => {
      if(emitted == false)
      this.updateDeleteServ.getAllBooks();
    }
  )
  }

  ngOnInit() {
  
    this.busy = this.updateDeleteServ.getAllBooks()
      .then(
      (response: any) => {
        this.listOfBooks = response;
      },
      (error) => {
        this.modal.alert()
          .size('lg')
          .showClose(true)
          .title('Books Not Loaded')
          .body("<h4>Books not loaded due to an error at server.</h4>")
          .open();
      }
      );
      
    this.updateDeleteServ.deletedBook.subscribe(
      (deletedBook: Book) => {
        this.listOfBooks = this.listOfBooks.filter(b => b.id != deletedBook.id);
      }
    )
    this.updateDeleteServ.updateEmit.subscribe(
      (bookToBeUpdated: Book) => {
        var index = this.listOfBooks.findIndex(b => b.id == bookToBeUpdated.id);
        this.listOfBooks[index] = bookToBeUpdated;
      }
    )
  }

}
