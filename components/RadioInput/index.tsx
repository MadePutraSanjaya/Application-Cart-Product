import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Typography, Flex } from 'antd';

const { Title } = Typography;
const Index: React.FC<AppProps> = ({ title, initialValue, options, disabled }) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: RadioChangeEvent) => {
      setValue(e.target.value);
    };
  
    return (
        <Flex vertical gap={16}>
        <Title level={5}>{title}</Title>
        <Radio.Group onChange={onChange} value={value}>
          {options.map(option => (
            <Radio key={option.value} value={option.value} disabled={disabled}>
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </Flex>
    );
  };

export default Index;