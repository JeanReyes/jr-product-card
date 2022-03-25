import React, { useState , ReactElement} from 'react';
import { ProductCard } from './ProductCard';
import { ProductImage, ProductTitle, ProductButtons } from '../components/index';
import { Product } from '../interfaces/interfaces';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Mug',
    img: './coffee-mug.png'
};

const product2 = {
    id: '2',
    title: 'Coffee Mug - 2',
    img: './coffee-mug2.png'
};

const products: Product []= [ product1, product2 ];

export interface ProductInCar extends Product{
    count: number;
};

export interface CarritoProps {
    children?: ReactElement | ReactElement []
    products:  {[key: string]: ProductInCar}
}

export const ShoppingPage = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{[key: string]: ProductInCar}>({});

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        
        setShoppingCart(oldValue => {
            /**
             * TRUCO: desestructuro el oldvalue y extraigo el valor que queda en 0, y el resto es lo que se mantiene,
             */
            if (count === 0) {
                const { [product.id]: toDolete, ...resto } = oldValue;
                return {
                    ...resto
                }
            };
            return {
                ...oldValue,
                [product.id]: {...product, count}
            }
        });
    };

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            values={ shoppingCart[product.id]?.count || 0 } // aqui ocurre la magia
                            onChange={ (evento)=> onProductCountChange(evento) }
                        >
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, productInCart])=>(
                        <ProductCard 
                            key={key}
                            product={productInCart}
                            className="bg-dark text-white"
                            styles={{width: '100px'}}
                            values={ productInCart.count }  
                            onChange={ (evento)=> onProductCountChange(evento) }     
                        >
                            <ProductCard.Image className="custom-image"/>
                            <ProductCard.Title title={'hola mundo'} className="text-white"/>
                            <ProductCard.Buttons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>
                {/* <ProductCard 
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title={'hola mundo'} className="text-white"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard> */}


                {/* <ProductCard 
                    product={product}
                    className="bg-dark text-white"
                    styles={{background: 'red'}}
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-white"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard> */}
            </div>
        </div>
    )
};
