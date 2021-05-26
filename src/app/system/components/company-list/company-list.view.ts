import { View } from '../../../core/mvp/view';
import { DocumentFilterModel } from '../../models/document-filter.model';
import { CompanyModel } from '../../models/company.model';

export abstract class CompanyListView extends View {
    filter: DocumentFilterModel;
    totalElements: number;
    companiesItem: CompanyModel[] = [];
    gettingDocuments = false;
    gettingCsv = false;
    company: CompanyModel;
    companySelect: CompanyModel;
    loadData: boolean;
}
