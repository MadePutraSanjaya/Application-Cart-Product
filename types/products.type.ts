export default interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: ICategory;
}

export interface ICategory {
    id: number;
    name: string;
    image: string;
}