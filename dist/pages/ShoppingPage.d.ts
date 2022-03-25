import { ReactElement } from 'react';
import { Product } from '../interfaces/interfaces';
export interface ProductInCar extends Product {
    count: number;
}
export interface CarritoProps {
    children?: ReactElement | ReactElement[];
    products: {
        [key: string]: ProductInCar;
    };
}
export declare const ShoppingPage: () => JSX.Element;
