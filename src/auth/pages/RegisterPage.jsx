import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

import { AuthInput, ButtonsContainer, FormPage } from '../components';

const formaData = {
    email: '',
    password: '',
    displayName: '',
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'Invalid Email'],
    password: [ (value) => value.length >= 6, 'The password is too short'],
    displayName: [ (value) => value.length >= 1, 'The name is required'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmited, setFormSubmited] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth);
    const isCheckignAuthentication = useMemo(() => status === 'checking', [status]);

    const {
        displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm(formaData, formValidations);

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmited( true );
        if ( !isFormValid ) return;
        
        dispatch( startCreatingUserWithEmailPassword( formState ) );
    }

    return (
    <FormPage name="Register">
        <form onSubmit={ onSubmit }>
            <AuthInput
                title="Full Name"
                type="text"
                placeholder="Your name"
                name="displayName"
                value={ displayName }
                change={ onInputChange }
            >
                {
                ( !!displayNameValid && formSubmited )
                    && (
                    <div className="mt-1 notification is-danger">
                        { displayNameValid }
                    </div>
                    )
                }
            </AuthInput>

            <AuthInput
                title="Email"
                type="email"
                placeholder="Email"
                name="email"
                value={ email }
                change={ onInputChange }
            >
                {
                ( !!emailValid && formSubmited )
                    && (
                    <div className="mt-1 notification is-danger">
                        { emailValid }
                    </div>
                    )
                }
            </AuthInput>

            <AuthInput
                title="Password"
                type="password"
                placeholder="Password"
                name="password"
                value={ password }
                change={ onInputChange }
            >
                {
                ( !!passwordValid && formSubmited )
                    && (
                    <div className="mt-1 notification is-danger">
                        { passwordValid }
                    </div>
                    )
                }
            </AuthInput>

            {
            ( !!errorMessage )
                && (
                    <div className="notification is-danger">
                        { errorMessage }
                    </div>
                )
            }
            
            <ButtonsContainer>
                <button
                    type="submit"
                    disabled={ isCheckignAuthentication }
                    className="button is-info is-fullwidth is-mobile my-5 has-text-weight-bold is-size-5"
                >
                    Register
                </button>

                <p>
                    <span>Already have an account? </span>
                    <NavLink to="/login">Log in</NavLink>
                </p>
            </ButtonsContainer>
        </form>
    </FormPage>
    )
}
