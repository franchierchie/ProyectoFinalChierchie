import { collection, deleteDoc, deleteField, doc, setDoc, updateDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addToCart, checkout, deleteProductCartById, loading, setCart, setProducts, updateAmount } from './ecommerceSlice';
import { loadProducts } from '../../helpers/loadProducts';

// Busca los productos en firebase y los manda al state, lo mismo con el carrito
export const startLoadingProducts = () => {
    return async( dispatch, getState ) => {

        dispatch( loading() );
        
        const { uid } = getState().auth;
        const { products, cart } = await loadProducts( uid );

        dispatch( setProducts( products ) );
        dispatch( setCart( cart ) );
    }
}

// Agrega el producto al carrito
export const startAddingToCart = ( product = {}, amount = 1 ) => {
    return async( dispatch, getState ) => {

        dispatch( loading() );

        const { uid } = getState().auth;
        
        const productToCart = { ...product, amount };
        delete productToCart.id;
        
        const newDoc = doc( collection( FirebaseDB, `cart/${ uid }/products` ) );
        await setDoc( newDoc, productToCart );

        productToCart.id = newDoc.id;

        dispatch( addToCart(productToCart) );

    }
}

// Actualiza la propiedad amount del producto
export const startUpdatingCartProduct = ( product, amount ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        const productToCart = { ...product, amount };

        const docRef = doc( FirebaseDB, `cart/${ uid }/products/${ product.id }` );
        await updateDoc( docRef, productToCart );

        dispatch( updateAmount( productToCart ) );

    }
}

// Quita el producto del carrito
export const startDeletingProduct = ( id ) => {
    return async( dispatch, getState ) => {

        dispatch( loading() );

        const { uid } = getState().auth;

        const docRef = doc( FirebaseDB, `cart/${ uid }/products/${ id }` );
        await deleteDoc( docRef );

        dispatch( deleteProductCartById( id ) );

    }
}

// Funcionalidad del boton checkout
export const startCheckout = () => {
    return async( dispatch, getState ) => {

        dispatch( loading() );

        const { uid } = getState().auth;
        const { cart } = getState().ecommerce;

        cart.forEach( async( prod ) => {
            const docRef = doc( FirebaseDB, `cart/${ uid }/products/${ prod.id }` );
            await deleteDoc( docRef );
        });

        dispatch( checkout() );

    }
}