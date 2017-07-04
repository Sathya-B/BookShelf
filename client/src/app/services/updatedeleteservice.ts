import { Inject, Injectable, Optional } from '@angular/core';
import { Book, BookDetails } from '../models/book.model';
import { ApiServices } from '../services/apiservices';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable()
export class UpdateDeleteServ {

    deletedBook = new EventEmitter<Book>();
    updateBook = new EventEmitter<boolean>();
    updateEmit = new EventEmitter<Book>();
    updateList = new EventEmitter<Book>();
    listOfBooks: Book[];
    bookToUpdate: Book;
    constructor(private apiServices: ApiServices) {
    
    this.updateEmit.subscribe(
      (bookToBeUpdated: Book) => {
        this.bookToUpdate = bookToBeUpdated;        
      }
    )
    }

    getAllBooks() {
        var promise = new Promise((resolve, reject) => {
            if (this.listOfBooks) {
                resolve(this.listOfBooks);
            }
            else {
                this.apiServices.getAllBooks()
                    .subscribe(
                    (response: any) => {
                        this.listOfBooks = response;
                        resolve(this.listOfBooks);
                    },
                    (error) => {
                        reject(error);
                    });
            }
        });
        return promise;
    }

    getBookToUpdate(){
        return this.bookToUpdate;
    }

    updateBookDetails(book: Book){
        var promise = new Promise((resolve, reject) => {
                this.apiServices.updateBookById(book.id, book)
                    .subscribe(
                    (response: any) => {
                        this.bookToUpdate = response;
                        var index = this.listOfBooks.findIndex(b => b.id == this.bookToUpdate.id);
                        this.listOfBooks[index] = this.bookToUpdate;
                        resolve(this.bookToUpdate);
                    },
                    (error) => {
                        reject(error);
                    });
            });
        return promise;
    }

}

