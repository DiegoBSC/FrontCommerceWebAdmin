import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { TypeProductModel } from '../../models/product/type-product.model';

@Injectable({
  providedIn: 'root'
})
export class TypeProductService {

  constructor(private http: HttpClient) { }

  listTypesProduct(){
    return this.http.get(environment.apiUrl + '/typeProduct/findAll');
  }

  findTypesProductById(id: string){
    return this.http.get(environment.apiUrl + '/typeProduct/find?typeProductId=' + id);
  }

  createTypeProduct(typeProduct: TypeProductModel){
    return this.http.post(environment.apiUrl + '/typeProduct/create', typeProduct);
  }

  deleteTypeProduct(idType: string){
    return this.http.delete(environment.apiUrl + '/typeProduct/delete?typeId=' + idType);
  }
}
