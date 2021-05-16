export interface UserModel {
    userId?: string;
    nick?: string;
    password?: string;
    fullName?: string;
    dni?: string;
    email?: string;
    rolePresenters?: string[];
    resetPassword?: boolean;
    oldPassword?: string;
}
