import React from 'react';
import { ProductContextProps, Props } from '../interfaces/interfaces';
export declare const productContext: React.Context<ProductContextProps>;
export declare const ProductCard: {
    ({ children, product, className, styles, onChange, values }: Props): JSX.Element;
    Title: ({ title, className }: {
        title?: string | undefined;
        className?: string | undefined;
    }) => JSX.Element;
    Image: ({ img, className }: {
        img?: string | undefined;
        className?: string | undefined;
    }) => JSX.Element;
    Buttons: ({ className }: {
        className?: string | undefined;
    }) => JSX.Element;
};
