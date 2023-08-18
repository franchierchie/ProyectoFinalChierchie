import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
import { clearProductsLogOut } from '../ecommerce/ecommerceSlice';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

// Login con Google
export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ));

        dispatch( login( result ) );
    }
}

// Register con email y password
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if ( !ok ) return dispatch( logout({ errorMessage }) );
        
        dispatch( login({ uid, displayName, email, photoURL }) );
    }
}

// Login con email y password
export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        if ( !result.ok ) return dispatch( logout( result ));

        dispatch( login( result ) );
    }
}

// Logout y limpia el state
export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( logout({}) );
        dispatch( clearProductsLogOut() );
    }
}