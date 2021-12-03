import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    const history = useHistory();

    function signIn() {
        // console.log('Je bent ingelogd');
        history.push('/blogpost-overview')
    }
    return (
        <>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen.</p>
            <button type="button" onClick={signIn}>Inloggen</button>
        </>
    );
};

export default LoginPage;