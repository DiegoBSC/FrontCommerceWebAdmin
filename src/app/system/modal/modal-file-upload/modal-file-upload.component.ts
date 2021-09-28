import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ModalFileUploadView } from './modal-file-upload.view';
import { ModalFileUploadPresenter } from './presenter/modal-file-upload.presenter';

@Component({
  selector: 'app-modal-file-upload',
  templateUrl: './modal-file-upload.component.html',
  styleUrls: ['./modal-file-upload.component.css']
})
export class ModalFileUploadComponent extends ModalFileUploadView implements OnInit {


  @Input() imagePreloaded: string;
  @Input() typeFile: string;
  @Input() viewList: boolean;
  @Output() closetModal = new EventEmitter<any>();

  constructor(
    private modalService: NgbModal,
    private modalFileUploadPresenter: ModalFileUploadPresenter,
    toastr: ToastrService) {
    super(toastr);
    this.modalFileUploadPresenter.view = this;
  }

  ngOnInit(): void {
    if (!this.imagePreloaded) {
      this.imagePreloaded = 'assets/images/product.png';
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.imagePreloaded = this.modalFileUploadPresenter.imagenTemporal;
        this.closetModal.emit(this.imagePreloaded);
      }, (reason) => {
        this.modalService.dismissAll();
      });
  }

  selectedFile(event) {
    this.modalFileUploadPresenter.selectFile(event);
  }

  successFile() {
    this.imagePreloaded = this.modalFileUploadPresenter.imagenTemporal;
    this.closetModal.emit(this.imagePreloaded);
    this.modalService.dismissAll();
  }

}
