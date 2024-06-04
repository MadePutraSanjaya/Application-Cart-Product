import React from 'react'
import { Carousel } from 'antd';
import Image from "next/image"
import IProduct from '@/types/products.type';
import { ProductList } from '@/types/product-list.type';

const Index = ({ data }: ProductList) => {
    return (
        <Carousel autoplay className='relative px-6 py-10 mx-auto sm:px-16 sm:py-20 max-w-7xl'>
           {data && Array.isArray(data) && data.slice(0, 5).map((product: IProduct, index: number) => (
                <div className="h-[300px]" key={index}>
                    <Image
                        alt={product.title}
                        src={product.category.image}
                        width={500}
                        height={200}
                        loading='lazy'
                        className='object-cover h-[300px] mx-auto w-full'
                    />

                </div>
            ))}

        </Carousel>
    )
}

export default Index