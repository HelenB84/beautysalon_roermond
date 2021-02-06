import React from 'react';
import './PriceCard.css'

export default function PriceCard({title, price, description, duration, extra}){
    return(
        <article className='price-card'>
            <h2 className='product-name'>
                {title}
            </h2>
            <h2 className='product-price'>
                {price}
            </h2>
            <p className='product-description'>
                {description}
            </p>
            <p className='product-extra-description'>
                {extra}
            </p>
            <p className='product-duration'>
                {duration}
        </p>
        </article>
    )
}