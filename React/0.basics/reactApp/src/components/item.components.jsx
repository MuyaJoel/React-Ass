import React from 'react'

export const ItemComponents = (props) => {
    const {product}=props
  return (
    <div>
        <span>{product.title}</span><br />
        <span>{product.description}</span><br />
        <span>{product.price}</span><br />
        <span>{product.availableColors}</span><br />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
    </div>
  )
}
export default ItemComponents