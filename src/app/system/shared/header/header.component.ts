import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/home/models/user.model';
import { AuthService } from '../../../core/shared/data/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: UserModel;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
