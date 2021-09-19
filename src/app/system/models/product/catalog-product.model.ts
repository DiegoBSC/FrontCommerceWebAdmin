import { ProductModel } from './product.model';

export interface CatalogProductModel {
    id?: string;
    createdDate?: Date;
    name?: string;
    status?: string;
    products?: ProductModel;
    companyId?: string;
}
