"use client";
import React from 'react'
import { Typography, Flex, Space, Card } from 'antd';
import { ProductList } from '@/types/product-list.type';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from 'next/image'
import IProduct from '@/types/products.type';

const { Title, Text } = Typography;
const { Meta } = Card;

const Index = ({ text, title, data }: ProductList) => {
    return (
        <div className="relative px-6 pb-10 mx-auto sm:px-16 sm:pb-20 max-w-7xl overflow-x-hidden">
            <Flex gap="middle" align="center">
                <div className="bg-secondary2 w-6 h-10 rounded"></div>
                <Text className='text-secondary2 font-semibold'>{text}</Text>
            </Flex>
            <Flex className='my-4'>
                <Title level={2}>{title}</Title>

            </Flex>
            <CardList data={data} />
        </div>
    )
}

export const CardList = ({ data }: ProductList) => {
    return (
        <Space className='space-slide'>
            <Splide
               options={{
                rewind: true,
                perPage: 4,
                gap: "1rem",
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
                {data && data.slice(0, 5).map((product: IProduct, index: number) => (
                    <SplideSlide key={index} >
                        <Card
                            className='border-transparent w-full '
                            // style={{ width: 240 }}
                            cover={<Image alt="example" width={100} height={100} src={product.images[0]} loading='lazy' className='rounded-none object-cover'
                            />}
                        >
                            <Meta title={product.title} description="www.instagram.com" />
                        </Card>

                    </SplideSlide>
                ))}
            </Splide>
        </Space>
    )
}

export default Index