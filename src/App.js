import React, { useState } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import './App.css';

import TopMenu from "./components/TopMenu";
import BlogPostPage from './pages/BlogPostPage';
import BlogPostsOverviewPage from './pages/BlogPostsOverviewPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


// STAPPENPLAN PAGINA COMPONENT MAKEN
// [x] directory genaamd "pages"
// [x] JavaScript bestandje maken voor iedere pagina (met Hoofdletter!)
// - Supertip: typ in ieder bestand rsc + tab om een boilerplate component te maken
// [x] Test je pagina componenten door ze allemaal in App.js te importeren en onder elkaar weer te geven.

// STAPPENPLAN ROUTING IMPLEMENTEREN
// [x] npm install react-router-dom@5.1.2
// [x] BrowserRouter as Router importeren uit react-router-dom (index.js)
// [x] Switch, Route importeren uit react-router-dom (App.js)
// Implementeren:
// [x] 1. Routing "bedenken" door het Switch en Route component te gebruiken in App.js
// [x] 2. Maak een navigatiebalk met de links naar de paginas (netjes om ul te gebruiken!)
// [x] Zorg dat deze op iedere pagina te zien is. Gebruik hiervoor het NavLink component
// en zoek op hoe het ookalweer werkte met die actieve CSS class
// [x] 3. Maak op de Login pagina een knop "Inloggen". Wanneer de gebruiker daarop klikt,
// gebruik je useHistory om de gebruiker door te sturen naar BlogOverzichtPagina

// BLOGPOST PAGINA MAKEN:
// 1. Maak eerst met eigen-bedachte tekst een structuur voor de overzichtspagina (wat moet er allemaal op? Maak ook alvast een Link-component, etc. )
// 2. Importeer de "echte" posts zoals beschreven in het voorbeeld
// 3. CHECK YOURSELF BEFORE YOU WRECK YOURSELF! Console log de data en bekijk wat het is? Array? Object? Object met Arrays of andersom?
// 4. Is er een handige manier om al die data niet handmatig uit te hoeven schrijven?
// 5. Zorg ervoor dat er een link en titel voor iedere post wordt gegenereerd


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <TopMenu
                isAuth={isAuthenticated}
                toggleAuth={toggleIsAuthenticated}
            />
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route path="/blogpost-overview">
                    {isAuthenticated ? <BlogPostsOverviewPage/> : ""}
                </Route>
                <Route path="/blogpost/:blogId">
                    { isAuthenticated ? <BlogPostPage/> : ""}
                </Route>
                <Route path="/login">
                    <LoginPage
                    toggleAuth={toggleIsAuthenticated}
                    isAuth={isAuthenticated}
                    />
                </Route>
            </Switch>
            {console.log(isAuthenticated)}
        </>
    );
}

export default App;



