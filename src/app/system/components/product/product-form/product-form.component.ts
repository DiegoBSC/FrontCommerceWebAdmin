import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFormView } from './product-form.view';
import { ToastrService } from 'ngx-toastr';
import { ProductFormPresenter } from './presenter/product-form.presenter';
import { FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { TypeProductModel } from '../../../models/product/type-product.model';
import { CategoryProductModel } from '../../../models/product/category-product.model';
import { TaxProductModel } from '../../../models/product/tax-product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent extends ProductFormView implements OnInit {

  productId: string;
  title: string;
  imageProduct: any;

  productForm = this.formBuilder.group({
    nameProduct: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
    codeProduct: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    purchasePrice: ['', [Validators.required,
    RxwebValidators.numeric({ allowDecimal: true, isFormat: true }),
    Validators.maxLength(50)]],
    salePrice: ['', [Validators.required,
    RxwebValidators.numeric({ allowDecimal: true, isFormat: true }),
    Validators.maxLength(50)]],
    status: [false]
  });

  constructor(private route: ActivatedRoute,
              private productFormPresenter: ProductFormPresenter,
              private formBuilder: FormBuilder,
              toastrService: ToastrService) {
    super(toastrService);
    productFormPresenter.view = this;
    this.route.params.subscribe((data) => {
      this.product = data;
      if (this.productId) {
        this.title = 'Editar Producto';
      } else {
        this.title = 'Ingresar Producto';
      }
    });
  }

  async ngOnInit(): Promise<void> {
    this.productFormPresenter.getCategoriesProduct();
    this.productFormPresenter.getTypesProduct();
    this.productFormPresenter.getTaxesProduct();
    this.productForm.patchValue({
      nameProduct: this.product?.name,
      codeProduct: this.product?.code,
      description: this.product?.description,
      purchasePrice: this.product?.purchasePrice,
      salePrice: this.product?.salePrice,
      status: this.product.status === 'ACT' ? true : false
    });
    this.submited = false;
  }

  imageSelectedAction(event) {
    this.imageProduct = event;
  }

  async onSubmit() {
    debugger
    this.product.name = this.productForm.value.nameProduct;
    this.product.code = this.productForm.value.codeProduct;
    this.product.description = this.productForm.value.description;
    this.product.purchasePrice = this.productForm.value.purchasePrice;
    this.product.salePrice = this.productForm.value.salePrice;
    this.product.status = this.productForm.value.status ? 'ACT' : 'INA';
    console.log(this.product);
    await this.productFormPresenter.saveProduct(this.product);
  }

}
