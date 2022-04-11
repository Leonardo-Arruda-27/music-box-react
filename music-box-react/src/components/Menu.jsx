import React from "react";
import Imagem from '../html-css-template/imagens/avatar.png';
import ImagemVerde from '../html-css-template/imagens/logo-verde.png';


function Menu() {
    return (
        <>
            <nav>
                <div className="container">
                    <img src={ImagemVerde} alt="Logo" className="logo" />
                    <img src={Imagem} alt="Avatar" className="avatar" />
                </div>
            </nav>
        </>
    );
}

export default Menu;