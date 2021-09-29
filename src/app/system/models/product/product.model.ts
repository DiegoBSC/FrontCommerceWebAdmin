import { TypeProductModel } from './type-product.model';
import { CategoryProductModel } from './category-product.model';
import { TaxProductModel } from './tax-product.model';
export interface ProductModel {
    id?: string;
    createdDate?: Date;
    name?: string;
    code?: string;
    description?: string;
    purchasePrice?: string; // Aqui se completa
    salePrice?: string;
    image?: string;
    status?: string;
    typeProduct?: TypeProductModel;
    categoryProduct?: CategoryProductModel;
    taxProduct?: TaxProductModel;
}
