import React, { useContext } from "react";
import { productContext } from "../pages/ProductCard";
import style from '../styles/styles.module.css';

// export const ProductButtons = ({ counter, increaseBy }: { counter: number, increaseBy: (value: number)=> void }) => {
export const ProductButtons = ({className}: {className?: string}) => {
    const { counter, increaseBy } = useContext(productContext);

    return (
        <div className={`${style.buttonsContainer} ${className}`}>
            <button className={style.buttonMinus} onClick={ ()=> increaseBy(-1) }> - </button>
            <div className={style.countLabel}> { counter } </div>
            <button className={style.buttonAdd} onClick={ ()=> increaseBy(+1) }> + </button>
        </div>
    )
};
    