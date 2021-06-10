import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { TaxProductModel } from '../../models/product/tax-product.model';

@Injectable({
  providedIn: 'root'
})
export class TaxProductService {

  constructor(private http: HttpClient) { }

  listTaxsProduct(){
    return this.http.get(environment.apiUrl + '/taxProduct/findAll');
  }

  findTaxProductById(id: string){
    return this.http.get(environment.apiUrl + '/taxProduct/find?taxProductId=' + id);
  }

  createTaxProduct(taxProduct: TaxProductModel){
    return this.http.post(environment.apiUrl + '/taxProduct/create', taxProduct);
  }

  deleteTaxProduct(id: string){
    return this.http.delete(environment.apiUrl + '/taxProduct/delete?taxProductId=' + id);
  }
}
