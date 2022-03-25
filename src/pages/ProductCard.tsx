import React,{ createContext } from 'react';
import { ProductContextProps, Props } from '../interfaces/interfaces';
import { ProductImage, ProductTitle, ProductButtons } from '../components/index';
import style from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext;

export const ProductCard = ({ children, product, className, styles, onChange, values }: Props) => {

    const { counter, increaseBy } = useProduct({ onChange, product, values});

    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }}>
            <div 
                className={ `${ style.productCard } ${className}` }
                style={styles}
            >
                {children}
            </div>
        </Provider>
    )
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
