import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {useAuthState, AuthContext} from "../context/AuthContext";


function LoginSignupButton() {
    const history = useHistory();

    const { isAuthenticated } = useAuthState();
    const { logout } = useContext(AuthContext);

    return (
            <div>
                {isAuthenticated ? (
                    <button className='logout-button' type="button" onClick={() => logout()}
                    >Log uit</button>
                ) : (
                    <>
                        <button className='logout-button'
                            type="button"
                            onClick={() => history.push('/login')}
                        >
                            Log in
                        </button>
                        <button className='logout-button'
                            type="button"
                            onClick={() => history.push('/signup')}
                        >
                            Registreren
                        </button>
                    </>
                )}
            </div>
    );
}

export default LoginSignupButton;