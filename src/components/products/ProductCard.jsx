import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const ProductCard = ({ name, imageSrc, price, id }) => {

  return (
    <div className="card p-4">
        <div className="card-image">
          <figure className="image">
              <img src={ imageSrc } alt={ name } />
          </figure>
        </div>

        <div className="card-content">
          <p className="title is-5">{ name }</p>
          <p className="subtitle is-6">${ price.toLocaleString(undefined, {maximumFractionDigits:2}) }</p>
        </div>

        <div className="buttons">
          <NavLink className="button is-fullwidth is-mobile is-info" to={`/item/${ id }`}>View Product</NavLink>

          <button
            className="button is-fullwidth is-mobile is-link is-outlined"
          >
            <ShoppingCartIcon color="white" />
            <span className="pl-3">Add to cart</span>
          </button>
        </div>
    </div>
  )
}
