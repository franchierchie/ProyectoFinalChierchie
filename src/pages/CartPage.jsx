import { CartItem } from '../components';

export const CartPage = () => {
    return (
    <section className="section">
        <div className="container">
            <h1 className="title">Shopping Cart</h1>

            <div className="columns">
                <div className="column is-three-quarters">
                    <div className="box">
                        <h2 className="subtitle">Cart Items</h2>

                        {/* //* map() a los productos del carrito para mostrarlos */}
                        <CartItem
                            id={ 1 }
                            name="AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler"
                            src="/products/AMD-RYZEN-5-3600.jpg"
                            price={ 93900 }
                            amount={ 1 }
                        />
                        <CartItem
                            id={ 1 }
                            name="AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler"
                            src="/products/AMD-RYZEN-5-3600.jpg"
                            price={ 93900 }
                            amount={ 1 }
                        />
                    </div>
                </div>

                <div className="column is-one-quarter">
                    <div className="box">
                        <h2 className="subtitle">Cart Summary</h2>

                        <div className="field">
                            <p className="subtitle is-6">Total: ${ 187800 }</p>
                        </div>

                        <div className="field">
                            <button className="button is-primary is-fullwidth">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
