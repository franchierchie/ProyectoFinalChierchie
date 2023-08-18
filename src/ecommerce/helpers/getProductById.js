import { useSelector } from 'react-redux';

export const getProductById = ( id ) => {
    const { products } = useSelector( state => state.ecommerce );

    return products?.find( prod => prod.id == id );
}
