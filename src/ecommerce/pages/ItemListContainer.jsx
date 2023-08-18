import { useDispatch, useSelector } from 'react-redux';

import { CatButtons, LoadingCatButtons, LoadingProductCard, ItemList } from '../components';

import { getCategories } from '../helpers';
import { setActiveCategories } from '../../store/ecommerce/ecommerceSlice';

export const ItemListContainer = () => {
    const { isLoading, products, activeCategory } = useSelector( state => state.ecommerce );
    const dispatch = useDispatch();

    const categories = getCategories( products );

    const handleCatClick = ( event ) => {
        const cat = event.target.innerHTML.toLowerCase();
        dispatch( setActiveCategories( cat ) );
    }
    
    return (
    <div className="container">
        <h1 className="title pt-5">Products</h1>
        
        <div className="buttons is-centered is-flex-mobile">
            {
            ( isLoading )
                ? ( <LoadingCatButtons /> )
                : ( <CatButtons categories={ categories } onClick={ handleCatClick } /> )
            }
        </div>

        <div className="columns is-multiline">
            {
            ( isLoading )
                ? ( <LoadingProductCard /> )
                : ( <ItemList
                        products={ products }
                        activeCategory={ activeCategory }
                    /> )
            }
        </div>

        
    </div>
    )
}
