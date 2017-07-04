import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book, BookDetails } from '../models/book.model';
import { ApiServices } from '../services/apiservices';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Response } from '@angular/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddBookComponent {
  @ViewChild('f') addBookForm: NgForm;
  
    book: Book; 
    busy: Subscription;
    constructor(private apiServices: ApiServices, private modal: Modal, private bookinfo: BookDetails){

};

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.book = new Book();
    this.book = this.addBookForm.value.bookDetails;
    var books = JSON.stringify(this.book);

  this.busy = this.apiServices.addBook(this.book)
    .subscribe(
      (response) => {
        this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Book Added')
        .body("<h4>Book added to Shelf.</h4>")
        .open();
        this.addBookForm.reset();
      },
      (error) => {
        console.log(error);
        this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Book Not Added')
        .body("<h4>Book not added to Shelf due to an error at server.</h4>")
        .open();
      }
    )
  }
}
