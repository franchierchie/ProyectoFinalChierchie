import { useDispatch } from 'react-redux';
import { startCheckout } from '../../../store/ecommerce';

export const Brief = () => {

    const dispatch = useDispatch();

    const handleCheckoutClick = () => {
        dispatch( startCheckout() );
    }

  return (
    <div className="field">
        <button
            className="button is-primary is-fullwidth"
            onClick={ handleCheckoutClick }
        >
            Checkout
        </button>
    </div>
  )
}
