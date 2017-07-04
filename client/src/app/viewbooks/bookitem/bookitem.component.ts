import { Component, OnInit, Input } from '@angular/core';
import { Book, BookDetails } from '../../models/book.model';
import { ApiServices } from '../../services/apiservices';
import { UpdateDeleteServ } from '../../services/updatedeleteservice';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {
  @Input() book: any;
  busy: Subscription;
  category: string;
  currentstatus: string
  purchasedate: string
  constructor(private bookinfo: BookDetails, private apiServices: ApiServices, private modal: Modal,
    private updateDeleteServ: UpdateDeleteServ, private router: Router, private route: ActivatedRoute) {

  }
  url: string = "assets/images/book.jpg";
  ngOnInit() {
    if (this.book.category != undefined) {
      this.category = this.bookinfo.categoryList.find(b => b.category == this.book.category).categorydef;
    }
    if (this.book.currentstatus !=undefined) {
      this.currentstatus = this.bookinfo.statusList.find(b => b.currentstatus == this.book.currentstatus).statusdef;
    }
    if(this.book.purchasedate)
    {
      this.book.purchasedate = this.book.purchasedate.substring(0,10);
    }
}
  deleteClicked() {

    this.busy = this.apiServices.deleteBookById(this.book.id)
      .subscribe(
      (response) => {
        this.updateDeleteServ.deletedBook.emit(this.book);
        this.modal.alert()
          .size('lg')
          .showClose(true)
          .title('Book Deleted')
          .body("<h4>Book Removed from Shelf.</h4>")
          .open();
      },
      (error) => {
        this.modal.alert()
          .size('lg')
          .showClose(true)
          .title('Book Not Deleted')
          .body("<h4>Book not removed from Shelf due to an error at server.</h4>")
          .open();
      }
      )
  }

  updateClicked() {
    this.updateDeleteServ.updateBook.emit(true);
    this.updateDeleteServ.updateEmit.emit(this.book);
    this.router.navigate(['/updatebook'], { relativeTo: this.route })
  }
}
