import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import { startAddingToCart, startUpdatingCartProduct } from '../../store/ecommerce';
import { getProductById } from '../helpers';
import { AddItemButton, ItemQuantitySelector, BackButton, Description, ItemDetail } from '../components';

export const ItemDetailContainer = () => {

    const [amount, setAmount] = useState(1);

    const dispatch = useDispatch();
    const { isLoading, cart } = useSelector( state => state.ecommerce );

    const { itemId } = useParams();
    const product = getProductById( itemId );

    const add = () => {
        setAmount( prev => prev + 1 );
    }

    const subtract = () => {
        if ( amount > 1 ) {
            setAmount( prev => prev - 1 );
        }
    }

    const handleCartClick = () => {
        if ( cart.some( prod => prod.name === product.name ) ) {
            const productToCart = cart.filter( prod => prod.name === product.name );
            dispatch( startUpdatingCartProduct( productToCart[0], amount ) );
            return;
        }
        dispatch( startAddingToCart( product, amount ) );
    }
    
    return (
        <div className="product-detail container">

            <BackButton />
            
            <ItemDetail>
                <Description product={ product }>
                    <ItemQuantitySelector
                        subtract={ subtract }
                        amount={ amount }
                        add={ add }
                    />

                    <AddItemButton
                        handleCartClick={ handleCartClick }
                        isLoading={ isLoading }
                    />
                </Description>
            </ItemDetail>
        </div>
    )
}
