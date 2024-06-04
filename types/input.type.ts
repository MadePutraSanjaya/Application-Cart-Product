import { ReactNode } from "react";

export interface Inputprops {
    children?: ReactNode;
    className?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean
    title: string;
}