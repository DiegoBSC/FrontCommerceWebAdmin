import { Component, OnInit } from '@angular/core';
import { UserListView } from './user-list.view';
import { UserListPresenter } from './presenter/user-list.presenter';
import { ToastrService } from 'ngx-toastr';
import { DocumentFilterModel } from '../../models/document-filter.model';
import { DATAFILTERINIT } from '../../shared/utils/utils-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends UserListView implements OnInit {

  constructor(private userListPresenter: UserListPresenter, toastr: ToastrService) {
    super(toastr);
    userListPresenter.view = this;
  }

  ngOnInit(): void {
    this.getDataTable();
  }

  listUser(filter: DocumentFilterModel) {
    this.filter = filter;
    this.userListPresenter.getUsers();
    this.loadData = false;
  }

  getDataTable() {
    this.listUser(DATAFILTERINIT);
  }

  changeFilter(event) {
    console.log(event);

  }

  changePage(value: any) {
    this.filter.page = value;
    this.userListPresenter.getUsers();
    this.loadData = false;
  }

}
