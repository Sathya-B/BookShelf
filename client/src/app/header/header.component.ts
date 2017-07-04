import { Component, OnInit } from '@angular/core';
import { Book, BookDetails } from '../models/book.model';
import { ApiServices } from '../services/apiservices';
import { UpdateDeleteServ } from '../services/updatedeleteservice';
import { Router, ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bookToUpdate: Book;
  updatebook: boolean = false;
  isIn = false;
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  constructor(private updateDeleteServ: UpdateDeleteServ) {

  }
  ngOnInit() {
    this.updateDeleteServ.updateBook.subscribe(
      (updateBook: boolean) => {
        this.updatebook = updateBook;
      })
  }
}
