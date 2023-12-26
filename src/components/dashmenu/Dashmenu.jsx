import React, { useState } from "react";
import { ReactComponent as Icon } from '../../assets/svg-arrow-back.svg';

const Dashmenu = () => {

    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log("Formulaire soumis");
    };
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
      };

    return (
        <div className="menu-container">
                  <form className="menu-1" onSubmit={handleSubmit}>
        <h1 onClick={toggleFormVisibility}>
          Recette sur l'année 2022
          <Icon className={`icon ${isFormVisible ? "icon-hide" : "icon-show"}`} />
        </h1>

        {isFormVisible && (
          <div className={`menu-1-containt ${isFormVisible ? "" : "hidden"}`}>
            <div>
            <label htmlFor="data-set">Choix des données</label>
            <input type="button" id="data-set" value="Ajouter un jeu de données" />
            <input type="button" id="data-set" value="Ajouter un jeu de données" />
            <input type="button" id="data-set" value="Ajouter un jeu de données" />
            </div>

            <div>
            <label htmlFor="graphique-select">Type de graphique</label>
            <select name="graphique" id="graphique-select">
              <option value="0">Choisir un graphique</option>
              <option value="1">Camembert</option>
              <option value="2">Barre</option>
              <option value="3">Courbe</option>
            </select>
            </div>

            <div>
            <label htmlFor="axeY-select">Axes X et Y</label>
            <select name="axeY" id="axeY-select">
              <option value="0">Nombre</option>
              <option value="1">5</option>
              <option value="2">10</option>
              <option value="3">20</option>
            </select>
            </div>
            
          </div>
        )}
      </form>

            <form className="menu-2" onSubmit={handleSubmit}>
                <h1>Paramètres</h1>
                <div>
                    <label htmlFor="color-picker">Couleur du graphique:</label>
                    <input type="color" id="color-picker" name="chartColor" />
                </div>
                <div>
                    <label htmlFor="alignment-select">Alignement du graphique:</label>
                    <select id="alignment-select" name="chartAlignment">
                        <option value="left">Gauche</option>
                        <option value="center">Centre</option>
                        <option value="right">Droite</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="chart-name">Nom du graphique:</label>
                    <input type="text" id="chart-name" name="chartName" />
                </div>
                <div>
                    <input type="submit" value="Appliquer" />
                </div>
            </form>
        </div>
    );
};


export default Dashmenu;