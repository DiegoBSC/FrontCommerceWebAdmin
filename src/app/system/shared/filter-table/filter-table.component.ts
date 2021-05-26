import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TABLE_SIZE_ENUM } from '../utils/enum-size-table';
import { DocumentFilterModel } from '../../models/document-filter.model';
import { itemArrayByEnum } from '../utils/funtions-utils';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  @Input() documentFilterModel: DocumentFilterModel;
  @Input() dateFilterView: false;
  @Output() changeFilterEmitt = new EventEmitter<DocumentFilterModel>();

  arraySizeTable = [];

  constructor() { }

  ngOnInit(): void {
    this.arraySizeTable = itemArrayByEnum(TABLE_SIZE_ENUM);
  }

  changeSizeFilter(event: any) {
    if (event.target.value === '') {
      event.target.value = 5;
    }
    this.documentFilterModel.size = event.target.value;
    this.emitedValue();
  }

  emitedValue(){
    this.changeFilterEmitt.emit(this.documentFilterModel);
  }

}
