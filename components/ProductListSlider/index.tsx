"use client";
import React from 'react'
import { Typography, Flex, Space, Card } from 'antd';
import { ProductList } from '@/types/product-list.type';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from 'next/image'
import Link from 'next/link'
import IProduct from '@/types/products.type';
import Button from "@/components/Button"
import { slugify } from '@/utils/slugify';

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
                {data && data.slice(0, 5).map((product: IProduct, index: number) => (

                    <SplideSlide key={index} >
                        <Card
                            className='border-transparent w-full hover:border-red-500 rounded-none transition-all duration-100 hover:mt-2'
                            // style={{ width: 240 }}
                            cover={
                                <Image alt={product.title} src={cleanedImage(product.images?.[0])} width={100} height={100} loading='lazy' className='h-[14rem] rounded-none object-cover'
                                />

                            }
                        >
                            <Meta title={product.title} description={`Rp. ${product.price}`} />
                            <Link href={`/products/${slugify(product.title)}/${product.id}`}>
                                <Button className="bg-secondary2 text-white font-semibold w-full mt-4 hover:bg-hover-button">
                                    Get Now
                                </Button>
                            </Link>
                        </Card>

                    </SplideSlide>
                ))}
            </Splide>
        </Space>
    )
}

const cleanedImage = (image: string) => {
   return image.replace('[\"', '').replace('\\','').replace('\"]','');
   
};
export default Index