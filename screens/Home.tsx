"use client";

import Banner from '@/components/Banner';
import ListProduct from '@/components/ProductListSlider';
import { fetchProducts } from '@/libs/api/productApi';
import { useQuery } from '@tanstack/react-query';
import IProduct from '@/types/products.type';
import ProductsPage from '@/components/ProductTable/ProductTable';

const Home = () => {
  const { data: productList, isLoading, error } = useQuery<IProduct[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div >Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Banner data={productList || []} />
      <ListProduct text="Today's" title="Hot Now" data={productList || []} />
      <ProductsPage />
    </>
  );
};

export default Home;
