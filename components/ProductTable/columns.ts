import IProduct from "@/types/products.type";
import { ColumnDefBase } from "@tanstack/react-table";

interface ColumnDefWithAccessor<TData> extends ColumnDefBase<TData> {
  accessor: keyof TData;
  header: string;
}

export const columns: ColumnDefWithAccessor<IProduct>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Name Product",
    accessor: "title",
  },
  {
    header: "Price",
    accessor: "price",
  },
  {
    header: "Description",
    accessor: "description",
  },
  {
    header: "Image",
    accessor: "images",
  },
];
