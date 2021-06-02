import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiselect-field',
  templateUrl: './multiselect-field.component.html',
  styleUrls: ['./multiselect-field.component.css']
})
export class MultiselectFieldComponent implements OnInit {

  @Input() labelKey;
  @Input() primaryKey;
  @Input() textPlaceholder;
  @Input() dropdownListInput;
  @Output() changeSelectedItems = new EventEmitter<any[]>();

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() { }

  ngOnInit(): void {
    this.dropdownList = this.dropdownListInput;
    this.dropdownSettings = {
      labelKey: this.labelKey,
      primaryKey: this.primaryKey,
      singleSelection: false,
      text: this.textPlaceholder,
      selectAllText: 'Seleccionar todo',
      unSelectAllText: 'Deseleccionar todo',
      enableSearchFilter: true,
      classes: 'myclass custom-class',
      filterUnSelectAllText: 'Deseleccionar Filtrados',
      filterSelectAllText: 'Seleccionar Filtrados',
      maxHeight: '200',
      searchPlaceholderText: 'Buscar'
    };

  }

  onItemSelect(item: any) {
    this.changeSelectedItems.emit(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    this.changeSelectedItems.emit(this.selectedItems);
  }
  onSelectAll(items: any) {
    this.changeSelectedItems.emit(this.selectedItems);
  }
  onDeSelectAll(items: any) {
    this.changeSelectedItems.emit(this.selectedItems);
  }


}
