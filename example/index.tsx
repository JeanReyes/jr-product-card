import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Mug',
  img: './coffee-mug.png'
};

const App = () => {
  return (
    <div>
      <ProductCard 
          product={product}
      >
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title title={'hola mundo'} className="text-white"/>
          <ProductCard.Buttons className="custom-buttons"/>
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
