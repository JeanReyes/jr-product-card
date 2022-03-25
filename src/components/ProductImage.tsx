import React,{ useContext } from "react"
import { productContext } from "../pages/ProductCard"
import style from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ img = '', className }: { img?: string, className?: string }) => {
    const { product } = useContext(productContext)

    let showImage
    if (img) {
        showImage = img
    } else if (product.img) {
        showImage = product.img
    } else {
        showImage = noImage
    }

    return(
        <img className={`${ style.productImg } ${className}`} src={showImage} alt="Product img"/>
    )
}