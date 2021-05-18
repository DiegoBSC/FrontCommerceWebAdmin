export interface PaginatorModel<T> {
    data: Array<T>;
    totalPages: number;
    totalElements: number;
}