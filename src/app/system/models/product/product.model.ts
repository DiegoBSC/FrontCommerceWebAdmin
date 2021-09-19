export interface ProductModel {
    id?: string;
    createdDate: Date;
    name?: string;
    code?: string;
    description?: string;
    purchasePrice: string; //Aqui se completa
    salePrice: string;
    image?: string;
    status?: string;
    typeProductId?: string;
    categoryProductId?: string;
    taxProductId?: string;
    companyId?: string;
    
}
