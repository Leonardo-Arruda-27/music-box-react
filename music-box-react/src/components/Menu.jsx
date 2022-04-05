import React from "react";
import Imagem from '../html-css-template/imagens/avatar.png';
import ImagemVerde from '../html-css-template/imagens/logo-verde.png';


function Menu() {
    return (
        <>
            <nav>
                <div class="container">
                    <img src={ImagemVerde} alt="Logo" class="logo" />
                    <img src={Imagem} alt="Avatar" class="avatar" />
                </div>
            </nav>
        </>
    );
}

export default Menu;