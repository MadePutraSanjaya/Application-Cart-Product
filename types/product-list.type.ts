import IProduct from "./products.type";

export interface ProductList {
    title?: string;
    text?: string;
    data?: IProduct[];
}