import { NavLink, useParams } from 'react-router-dom';
import { getProductById } from '../helpers';
import { AmountButtons } from '../components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const product = getProductById( itemId );
    
    return (
    <>
        <div className="product-detail container">

            <NavLink to="/">
                <button className="button px-3 my-6 is-dark is-outlined">
                    <ArrowBackIcon color="white" />
                    <span className="pl-2">Back</span>
                </button>
            </NavLink>

            <div className="columns is-mobile is-multiline">

                <div className="column is-12-mobile is-6-tablet is-4-desktop">
                    <img src={ product?.img } alt={ product?.name } />
                </div>

                <div className="column is-12-mobile is-6-tablet is-8-desktop">
                    <h1 className="title is-3">{ product?.name }</h1>
                    <p className="subtitle is-5 pt-5">${ product?.price.toLocaleString(undefined, {maximumFractionDigits:2}) }</p>

                    <div className="field">
                        <label className="label">Quantity:</label>
                        <AmountButtons />
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-info is-outlined">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}
