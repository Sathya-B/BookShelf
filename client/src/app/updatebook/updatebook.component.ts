import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book, BookDetails } from '../models/book.model';
import { ApiServices } from '../services/apiservices';
import { UpdateDeleteServ } from '../services/updatedeleteservice';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Response } from '@angular/http';
import {Subscription} from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/Router';


@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdateBookComponent {
  @ViewChild('f') updateBookForm: NgForm;
  
    book: Book; 
    busy: Promise<any>;
    constructor(private apiServices: ApiServices, private updateDeleteServ: UpdateDeleteServ, 
     private modal: Modal, private bookinfo: BookDetails,  private router: Router, private route: ActivatedRoute){
    this.book = new Book();
    this.book = this.updateDeleteServ.getBookToUpdate();
    if(!this.book)
    {
      this.router.navigate([''], { relativeTo: this.route })
    }
};

  submitted = false;

  onSave() {
    this.submitted = true;
    this.updateBookForm.value.bookDetails.id = this.book.id;
    this.book = this.updateBookForm.value.bookDetails;
    this.busy = this.updateDeleteServ.updateBookDetails(this.book)
      .then(
      (response: any) => {
        this.modal.alert()
          .size('lg')
          .showClose(true)
          .title('Book Updated')
          .body("<h4>Book details updated </h4>")
          .open();
      this.router.navigate(['/viewbooks'], { relativeTo: this.route })
      },
      (error) => {
        this.modal.alert()
          .size('lg')
          .showClose(true)
          .title('Books Not Updated')
          .body("<h4>Books not updated due to an error at server.</h4>")
          .open();
      }
      );
  }
  cancelClicked(){
    this.updateDeleteServ.updateBook.emit(false);
    this.router.navigate(['/viewbooks'], { relativeTo: this.route })
  }
}
