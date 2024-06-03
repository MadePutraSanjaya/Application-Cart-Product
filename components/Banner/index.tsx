import React from 'react'
import { Carousel } from 'antd';
import Image from "next/image"

const Index = () => {
    return (
        <Carousel autoplay className='relative px-6 py-10 mx-auto sm:px-16 sm:py-20 max-w-7xl'>
            <div>
                <div className="h-[300px]">
                    <Image src="/dummy-image.jpeg" className='object-cover h-[300px] mx-auto' width={1000} height={100} alt="" />
                </div>
            </div>
            <div>
                <div className="h-[300px]">
                    <Image src="/dummy-image.jpeg" className='object-cover h-[300px] mx-auto' width={1000} height={100} alt="" />
                </div>
            </div>
            <div>
                <div className="h-[300px]">
                    <Image src="/dummy-image.jpeg" className='object-cover h-[300px] mx-auto' width={1000} height={100} alt="" />
                </div>
            </div>
            <div>
                <div className="h-[300px]">
                    <Image src="/dummy-image.jpeg" className='object-cover h-[300px] mx-auto brightness-50' width={1000} height={100} alt="" />
                </div>
            </div>
        </Carousel>
    )
}

export default Index