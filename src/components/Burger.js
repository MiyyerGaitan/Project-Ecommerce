import React from "react";
import '../styles/test.css';

import Hamburguer from '../img/Hamburguer.jpg';
import Fries from '../img/Fries.jpg';
import Gaseosa from '../img/Gaseosa.jpg';

const Burger = ({ burger, cart, setCart, burgers }) => {
  return (
    <div id="lista-cursos" class="containerizacion">
        <h1 id="encabezado" class="encabezado">Menú</h1>
        <div class="row">
        <div class="four columns">
                <div class="card">
                    <div class="info-card">
                        <h4>Hambuguer</h4>
                        <img width="250" height="200" src={Hamburguer}></img>
                        <p class="precio"> <span class="u-pull-right ">$15</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Add to cart</a>
                    </div>
                </div>
            </div>
            <div class="four columns">
                <div class="card">
                    <div class="info-card">
                        <h4>Fries</h4>
                        <img width="250" height="200" src={Fries}></img>
                        <p class="precio"> <span class="u-pull-right ">$15</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Add to cart</a>
                    </div>
                </div>
            </div>
            <div class="four columns">
                <div class="card">
                    <div class="info-card">
                        <h4>Gaseosa</h4>
                        <img width="250" height="200" src={Gaseosa}></img>
                        <p class="precio"> <span class="u-pull-right ">$15</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Burger;
