import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { CategoryProductModel } from '../../models/product/category-product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  constructor(private http: HttpClient) { }

  listCategoriesProduct(){
    return this.http.get(environment.apiUrl + '/api/categoryProduct/findAll');
  }

  findCategoryProductById(id: string){
    return this.http.get(environment.apiUrl + '/api/categoryProduct/find?taxProductId=' + id);
  }

  createCategoryProduct(categoryProduct: CategoryProductModel){
    return this.http.post(environment.apiUrl + '/api/categoryProduct/create', categoryProduct);
  }

  deleteCategoryProduct(categoryProduct: CategoryProductModel){
    return this.http.post(environment.apiUrl + '/api/categoryProduct/delete', categoryProduct);
  }
}
