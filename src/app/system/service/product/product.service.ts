import { Injectable } from '@angular/core';
import { DocumentFilterModel } from '../../models/document-filter.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  listProducts(filter: DocumentFilterModel) {
    const page = filter.page === 0 ? filter.page : filter.page - 1;
    let filters = '?page=' + page + '&size=' + filter.size;
    if (filter.mainFilter) {
      filters += '&mainFilter=' + filter.mainFilter;
    }
    if (filter.userId) {
      filters += '&userId=' + filter.userId;
    }
    return this.http.get(environment.apiUrl + '/product/list' + filters);
  }

  deleteProduct(productDelete: any) {
    return this.http.delete(environment.apiUrl + '/product/delete', productDelete);
  }

  productById(productId: any){
    return this.http.get(environment.apiUrl + '/product/find?productId=' + productId);
  }
}
