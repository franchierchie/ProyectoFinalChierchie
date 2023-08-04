import { NavLink } from 'react-router-dom';
import { FormField, FormPage } from '../components';
import GoogleIcon from '@mui/icons-material/Google';

export const LoginPage = () => {
    return (
    <FormPage name="Login">
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
            
            <div className="field">
                <div className="control has-text-centered">
                    <div className="buttons">
                        <button
                            className="button is-info is-fullwidth is-mobile mb-4 has-text-weight-bold is-size-5"
                        >
                            Log in
                        </button>
                        <button
                            className="button is-danger is-fullwidth is-mobile has-text-weight-bold is-size-5"
                        >
                            <GoogleIcon color="white" />
                            <span className="pl-2">Google</span>
                        </button>

                        <p className="mt-5">
                            <span>Don't have an account? </span>
                            <NavLink to="/register">Create one!</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </FormPage>
    )
}
