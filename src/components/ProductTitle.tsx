import React, { useContext } from "react"
import { productContext } from "../pages/ProductCard"
import style from '../styles/styles.module.css'

export const ProductTitle = ({ title, className }: { title?: string, className?: string }) => {
    const { product } = useContext(productContext)
    return(
        <span className={`${style.productDescription} ${className}`}> { title ? title : product.title } </span>
    )
}