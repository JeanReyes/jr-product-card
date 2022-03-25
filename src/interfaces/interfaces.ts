import React, { ReactElement } from "react";

export interface Props {
    children?: ReactElement | ReactElement [];
    product: Product;
    className?: string;
    styles?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    values?: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}