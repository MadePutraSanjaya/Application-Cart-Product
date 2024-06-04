import React from 'react'
import { Input } from 'antd';
import { Inputprops } from '@/types/input.type';
import { Typography, Flex } from 'antd';

const { Title } = Typography;
const Index = ({ placeholder, value, className, disabled, title, ...props }: Inputprops) => {
    return (
        <Flex vertical gap={16}>
            <Title level={5}>{title}</Title>
            <Input {...props} placeholder={placeholder} value={value} disabled={disabled} />
        </Flex>
    )
}

export default Index