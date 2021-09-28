import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  setFileValue(file: File, type): FormData {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('typeFile', type);
    return formData;
  }
}
