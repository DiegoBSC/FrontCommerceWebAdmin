import { ToastrService } from 'ngx-toastr';

export abstract class View {
    options = {
        progressBar: true,
        closeButton: true,
        positionClass: 'toast-bottom-right',
      };
    constructor( private toastr: ToastrService) { }

    download(localPath: string, name: string): void {
        const a = window.document.createElement('a');
        a.href = localPath;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    showError(message: string): void  {
        this.toastr.error(message, 'Error', this.options);
    }
    showInfo(message: string): void  {
        this.toastr.info(message, 'Información', this.options);
    }
    showSuccess(message: string): void  {
        // tslint:disable-next-line: no-unused-expression
        this.toastr.success(message), 'Ok', this.options;
    }
}

