import { NavLink } from 'react-router-dom';
import { FormField, FormPage } from '../components';

export const RegisterPage = () => {
    return (
        <FormPage name="Register">
        <form>
            <FormField
                type="text"
                name="Email"
                placeholder="Enter your email"
            />

            <FormField
                type="password"
                name="Password"
            />
            
            <FormField
                type="password"
                name="Confirm password"
            />
            
            <div className="field">
                <div className="control has-text-centered">
                    <div className="buttons">
                        <button
                            className="button is-info is-fullwidth is-mobile my-5 has-text-weight-bold is-size-5"
                        >
                            Register
                        </button>

                        <p>
                            <span>Already have an account? </span>
                            <NavLink to="/register">Log in</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </FormPage>
    )
}
