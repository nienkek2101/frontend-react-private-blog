import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage({ isAuth, toggleAuth }) {
    const history = useHistory();
    // console.log(isAuth);

    function signIn() {
        // console.log('Je bent ingelogd');
        // e.preventDefault();
        toggleAuth(true);
        history.push('/blogpost-overview');

    }
    return (
        <section>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen.</p>
            <button type="button" onClick={signIn}>Inloggen</button>
            {/*{console.log(isAuth)}*/}
        </section>
    );
};

export default LoginPage;