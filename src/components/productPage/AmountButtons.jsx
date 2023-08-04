import { useState } from 'react';

export const AmountButtons = () => {

    const [amount, setAmount] = useState(1);

    const add = () => {
        setAmount( prev => prev + 1 );
    }

    const subtract = () => {
        if ( amount > 1 ) {
            setAmount( prev => prev - 1 );
        }
    }


    return (
        <div className="control">
            <div className="field has-addons">
                <p className="control">
                    <button className="button" onClick={ subtract }>
                        -
                    </button>
                </p>
                <p className="control">
                    <input
                        className="input has-text-centered"
                        type="number"
                        value={ amount }
                        readOnly
                    />
                </p>
                <p className="control">
                    <button className="button" onClick={ add }>
                        +
                    </button>
                </p>
            </div>
        </div>
    )
}
