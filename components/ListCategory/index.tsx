'use client';
import React from 'react';
import { List } from 'antd';
import { ListCategory } from '@/types/category-list.type';

const Index = ({ items }: ListCategory) => {
  return (
      <List
        size="small"
        dataSource={items}
        renderItem={(item) => <List>{item}</List>}
      />
  );
};

export default Index;
