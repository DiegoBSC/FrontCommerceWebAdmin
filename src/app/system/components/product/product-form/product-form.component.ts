import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFormView } from './product-form.view';
import { ToastrService } from 'ngx-toastr';
import { ProductFormPresenter } from './presenter/product-form.presenter';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent extends ProductFormView implements OnInit {

  productId: string;
  title: string;
  imageProduct: any;

  constructor(private route: ActivatedRoute, private productFormPresenter: ProductFormPresenter,
              toastrService: ToastrService) {
    super(toastrService);
    productFormPresenter.view = this;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId');
      if (this.productId) {
        this.title = 'Editar Producto';
        this.productFormPresenter.getProductById(this.productId);
      } else {
        this.title = 'Ingresar Producto';
      }
    });
    this.loadData = false;
  }

  imageSelectedAction(event) {
    this.imageProduct = event;
  }

}
