import { useEffect, useState } from 'react';
import axios from 'axios';

export const getAllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [categories, setCategories] = useState([]);
    const [setselectedCat, setSetselectedCat] = useState('all');

    useEffect(() => {
        axios.get('/src/data/data.json')
        .then(res => {
            setAllProducts( res.data );
            setShowProducts( res.data );
            setLoading( false );
            const categories = res.data.map( product => product.category );
            const categoriesArray = ['all', ...new Set( categories )];
            setCategories( categoriesArray );
        })
        .catch(error => {
            console.error(`Error fetching products: ${ error }`);
            setLoading( false );
        });
    }, []);

    useEffect(() => {
        if ( setselectedCat === 'all' ) {
            setShowProducts( allProducts );
        } else {
            const prods = allProducts.filter( prod => prod.category === setselectedCat );
            setShowProducts( prods );
        }
    }, [setselectedCat]);
    

    return {
        products: showProducts,
        loading,
        categories,
        setSetselectedCat,
    };
}
