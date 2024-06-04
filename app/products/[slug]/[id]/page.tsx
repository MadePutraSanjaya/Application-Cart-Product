"use client";

import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '@/libs/api/productApi';
import IProduct from '@/types/products.type';
import { Col, Row, Typography } from 'antd';
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
const { Title, Text } = Typography;
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useDispatch } from 'react-redux';
import { addProduct } from '@/libs/redux/cartSlice';

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const { data: product, isLoading, error } = useQuery<IProduct, Error>({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(Number(id)),
    enabled: !!id,
  });

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addProduct(product));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className='relative px-6 py-10 pt-20 mx-auto sm:px-16 sm:py-24 max-w-7xl overflow-x-hidden'>
      <Row gutter={16}>
        <Col span={24} lg={{ span: 12 }} md={{ span: 24 }}>
          <Image
            alt={product.title}
            src={cleanedImage(product.images?.[0])}
            width={600}
            height={500}
            loading='lazy'
            className='w-full h-[22rem] mb-4 rounded-none object-cover'
          />
          <Splide
            options={{
              rewind: true,
              perPage: 4,
              gap: "2rem",
              breakpoints: {
                991: {
                  perPage: 2,
                },
                640: {
                  perPage: 2,
                },
                575: {
                  perPage: 1,
                },
              },
            }}
          >
            {product && product.images.map((image: string, index: number) => (
              <SplideSlide key={index}>
                <Image
                  alt={product.title}
                  src={cleanedImage(image)}
                  width={500}
                  height={200}
                  loading='lazy'
                  className='h-[8rem] rounded-none object-cover'
                />
              </SplideSlide>
            ))}
          </Splide>
        </Col>
        <Col span={24} lg={{ span: 12 }} md={{ span: 24 }}>
          <Title level={2}>{product.title}</Title>
          <div className="flex flex-col gap-4">
            <Text>{`Rp. ${product.price}`}</Text>
            <Text>{product.description}</Text>
            <Text><span className="text-text1">Category:</span>  {product.category.name}</Text>
          </div>
          <Button
            className='mt-4 w-full bg-secondary2 text-white font-semibold'
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const cleanedImage = (image: string) => {
  return image.replace('[', '').replace('"', '').replace('[\"', '').replace('\\', '').replace('\"]', '').replace('"', '');
};

export default ProductDetail;
