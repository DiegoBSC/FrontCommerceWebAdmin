import { View } from 'src/app/core/mvp/view';

export abstract class LoginView extends View {
    submited = false;
    showLogin = false;
    user: any;
    abstract enableForm(): void;
}
