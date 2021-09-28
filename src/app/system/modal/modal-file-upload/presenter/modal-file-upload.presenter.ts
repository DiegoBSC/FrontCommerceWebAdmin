import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { FileService } from '../../../service/file.service';
import { ModalFileUploadView } from '../modal-file-upload.view';
import { ToastrService } from 'ngx-toastr';

@Injectable(
  { providedIn: 'root' }
)
export class ModalFileUploadPresenter {

  selectedFile: File;
  imagenTemporal: any;

  constructor() { }
  view: ModalFileUploadView;

  selectFile(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onloadend = () => this.imagenTemporal = reader.result;
    this.view.file = this.imagenTemporal;
    if (this.selectedFile.type.indexOf('image') < 0) {
      this.selectedFile = null;
      this.view.showError('Tipo de archivo no valido');
    }
    this.view.showSuccess('Mensaje: ' + 'Archivo seleccionado');
  }

}
