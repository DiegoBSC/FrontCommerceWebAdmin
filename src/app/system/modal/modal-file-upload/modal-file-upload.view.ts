import { View } from '../../../core/mvp/view';

export abstract class ModalFileUploadView extends View {
    submited = false;
    file: File;
}
