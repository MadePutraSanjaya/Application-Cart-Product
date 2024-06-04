import axiosInstance from './axiosInstance';
import IProduct from '@/types/products.type';

// fetch data
export const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await axiosInstance.get<IProduct[]>('/products');
  return response.data;
};

// fetch data by ID
export const fetchProductById = async (id: number): Promise<IProduct> => {
  const response = await axiosInstance.get<IProduct>(`/products/${id}`); 
  return response.data;
};

// create data
export const createProduct = async (productData: Omit<IProduct, 'id'>): Promise<IProduct> => {
  const response = await axiosInstance.post<IProduct>('/products', productData);
  return response.data;
};

// update data
export const updateProduct = async (id: number, productData: Omit<IProduct, 'id'>): Promise<IProduct> => {
  const response = await axiosInstance.put<IProduct>(`/products/${id}`, productData);
  return response.data;
};

// delete data
export const deleteProduct = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/products/${id}`);
};
