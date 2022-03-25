import {useEffect, useState} from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

export const useProduct = ({product, onChange, values = 0}: {product: Product, onChange?: (args: onChangeArgs) => void, values?: number}) => {
    const [counter, setCounter] = useState(values);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0 );

        setCounter(newValue)
        if ( onChange ) onChange({product, count: newValue})
    }

    useEffect(()=> {
        setCounter(values)
    },[values]);

    return {
        counter,
        increaseBy
    }
};
