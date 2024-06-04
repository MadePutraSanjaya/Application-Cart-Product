"use client";

import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/libs/api/productApi';
import { useMemo } from 'react';
import { Table, Typography, Spin } from 'antd';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import IProduct from '@/types/products.type';
import Button from '../Button';
import Link from 'next/link'
import { slugify } from '@/utils/slugify';

const { Title } = Typography;

const ProductsPage = () => {

    const { data: products, isLoading, error } = useQuery<IProduct[], Error>({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const columns = useMemo<ColumnDef<IProduct>[]>(
        () => [
            {
                accessorKey: 'title',
                header: 'Title',
                cell: info => info.getValue(),
            },
            {
                accessorKey: 'price',
                header: 'Price',
                cell: info => `Rp. ${info.getValue()}`,
            },
            {
                accessorKey: 'description',
                header: 'Description',
                cell: info => info.getValue(),
            },
            {
                accessorKey: 'product.category.name',
                header: 'Category',
                cell: info => info.getValue(),
            },
            {
                accessorKey: 'actions',
                header: 'Actions',
                cell: ({ row }) => {
                    const slug = slugify(row.original.title);
                    return (
                      <Link href={`/products/${slug}/${row.original.id}`} passHref>
                        <Button >View Details</Button>
                      </Link>
                    );
                },
            },
        ],
        []
    );

    const table = useReactTable({
        data: products || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoading) return <Spin tip="Loading products..." />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="container mx-auto py-10 px-6 sm:px-16">
            <Title level={2}>Products</Title>
            <Table
                columns={table.getHeaderGroups().flatMap(headerGroup =>
                    headerGroup.headers.map(column => ({
                        title: flexRender(column.column.columnDef.header, column.getContext()),
                        dataIndex: column.id,
                        key: column.id,
                    }))
                )}
                dataSource={table.getRowModel().rows.map(row => row.original)}
                rowKey="id"
            />
        </div>
    );
};

export default ProductsPage;
