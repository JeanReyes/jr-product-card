# prueba

JEAN REYES

```
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

<ProductCard 
    product={productInCart}
    values={ productInCart.count }  
    onChange={ (evento)=> onProductCountChange(evento) }     
>
    <ProductCard.Image className="custom-image"/>
    <ProductCard.Title title={'hola mundo'} className="text-white"/>
    <ProductCard.Buttons className="custom-buttons"/>
</ProductCard>
```