import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginView } from './login.view';
import { LoginPresenter } from './presenter/login.presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends LoginView implements OnInit {

  loadPage = true;

  loginForm = this.formBuilder.group({
    nick: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginPresenter: LoginPresenter, toastr: ToastrService) {
    super(toastr);
    this.loginPresenter.view = this;
  }

  ngOnInit(): void {
    this.loadPage = false;
  }


  logIn(): void {

    this.loadPage = true;
    if (this.loginForm.valid && !this.submited) {
      this.loginForm.disable();
      this.user = this.loginForm.value;
      this.loginPresenter.doLogin();
    }
    this.loadPage = false;
  }

  enableForm(): void {
    this.loginForm.enable();
  }

}
