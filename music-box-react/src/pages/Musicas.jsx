import React from "react";
import ItemMusica from '../components/ItemMusica';
import Menu from "../components/Menu";

function Musicas() {
    return (
        <>
            <Menu />
            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">

                    <ItemMusica
                        musica="Vampiro"
                        artista="Matue, Teto, Will"
                        genero="Trap"
                        ano={2022}
                        id="1"
                    />

                    <ItemMusica
                        musica="Sodoma & Gomorra"
                        artista="Borges ft BK"
                        genero="Trap"
                        ano={2021}
                        id="2"
                    />



                </div>
            </div>

        </>
    );
}

export default Musicas;