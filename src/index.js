import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import { Feather, ShoppingCart } from 'react-feather';
import App from './components/App';
import {GlobalStyle, Menu, Header, Page, Hamburger} from './components/UiComponents'
import Burger from "./components/Burger";

if (process.env.NODE_ENV === 'production')
    var url = window.location.origin;
else
    var url = 'http://192.168.1.54';

function Root() {
    
    const [menu, setMenu] = useState(false);

    return <><GlobalStyle />

    <BrowserRouter>

        <Header>
            <h1><Feather style={{vericalAlign:"-0.1em"}} /> Restaurant</h1>
            <h1><ShoppingCart style={{verticalAlign:"-0.1em"}} /> </h1>
            <Hamburger onClick={() => setMenu(!menu)} />
            <Menu className={menu ? "" : "menuHidden"}>
                <li><NavLink onClick={() => setMenu(false)} exact to="/">Home</NavLink></li>
                <li><NavLink onClick={() => setMenu(false)} exact to="/config">Check-out</NavLink></li>
            </Menu>

        </Header>
        
    </BrowserRouter>
    <Page>
        <Burger />
    </Page>
</>;

}



ReactDOM.render(<Root />, document.getElementById('root'));