import React from 'react'
import "../assets/css/style.css"
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ id, title, img, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating)
              .fill()
              .map((_) => (
                <StarRateIcon className="product__star" />
              ))
          }
        </div>
      </div>
      <img src={img} alt="" />
      <button>Adicionar</button>
    </div>
  )
}

export default Product
