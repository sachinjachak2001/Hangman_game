import React, { Component } from "react";
import "./Pockecard.css";
// const Poke_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const Poke_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
const padTwoThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

class Pokecard extends Component {
  render() {
    let imgSrc = `${Poke_API}${padTwoThree(this.props.id)}.png`;
    return (
      <div className="Pockecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-img">
          <img src={imgSrc} alt={this.props.name} />
        </div>

        <div className="Pokecard-data">{this.props.type}</div>
        <div className="Pokecard-data">{this.props.exp}</div>
      </div>
    );
  }
}
export default Pokecard;
