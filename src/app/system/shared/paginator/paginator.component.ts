import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() totalElements: number;
  @Input() page: number;
  @Input() maxSize = 5;
  @Input() size = 10;
  @Output() changePageEmitt = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changePagePaginator(page: any) {
    this.changePageEmitt.emit(page);
  }

}
