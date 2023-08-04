import { getAllProducts } from './';

export const getProductById = ( id ) => {

    const { products } = getAllProducts();

    return products?.find( prod => prod.id == id );
}
