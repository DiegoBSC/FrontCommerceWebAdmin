import { Component, Input, OnInit, Type, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  @Input() itemPk: any;
  @Output() closetModal = new EventEmitter<any>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closetModal.emit(this.itemPk);
      }
    );
  }

}
