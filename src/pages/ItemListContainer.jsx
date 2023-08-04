import { CatButtons, ProductCard } from '../components';
import { getAllProducts } from '../helpers';

export const ItemListContainer = () => {
    const { loading, products, categories, setSetselectedCat } = getAllProducts();

    const handleCatClick = ( event ) => {
        const cat = event.target.innerHTML.toLowerCase();
        setSetselectedCat( cat );
    }
    
    return (
    <div className="container">
        <h1 className="title pt-5">Products</h1>
        
        <div className="buttons is-centered is-flex-mobile">
            {
                ( loading )
                ? (<button className="button is-info is-loading">Loading</button>)
                :(
                    <CatButtons
                        categories={ categories }
                        onClick={ handleCatClick }
                    />
                )
            }
        </div>

        <div className="columns is-multiline">
            {
                ( loading )
                ? (<p className="title">Loading...</p>)
                : (
                    products.map(prod => (
                        <div key={ prod.id } className="column is-4">
                            <ProductCard
                                name={ prod.name }
                                imageSrc={ prod.img }
                                price={ prod.price }
                                id={ prod.id }
                            />
                        </div>
                    ))
                )
            }
        </div>
    </div>
    )
}
