import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PokemonService from './PokemonService.js';

import ListItem from './ListItem.js';

class View extends Component {
    constructor(props) {
        super(props);

        this.updatePokemon(this.props.match.params.pokemonId);
    }
    
    componentWillReceiveProps(nextProps) {
        this.updatePokemon(nextProps.match.params.pokemonId);
    }

    updatePokemon(pokemonId) {
        this.state = {
            pokemon: null
        };

        const pokemonService = new PokemonService();

        pokemonService.getOne((result) => {
            this.setState({
                pokemon: result.data.pokemon
            });
        }, pokemonId);
    }

    render() {
        const pokemon = this.state.pokemon;
        const evolutions = [];

        if (pokemon != null) {
            if (pokemon.evolutions != null) {
                for (let item of pokemon.evolutions) {
                    evolutions.push(<ListItem
                        key={item.id}
                        name={item.name}
                        pokemonId={item.id} />);
                }
            }
    
            return (
                <div>
                    <Link to="/"><div>Back to home</div></Link>
                    
                    <h1>{pokemon.name}<sub>{pokemon.number}</sub></h1>

                    <img src={pokemon.image} />

                    <div>Classification : {pokemon.classification}</div>
                    <div>Types : {pokemon.types}</div>
                    <div>Resistant : {pokemon.resistant}</div>
                    <div>Weaknesses : {pokemon.weaknesses}</div>
                    <div>Weight : from {pokemon.weight.minimum} to {pokemon.weight.maximum}</div>
                    <div>Height : from {pokemon.height.minimum} to {pokemon.height.maximum}</div>

                    <h2>Evolutions</h2>
                    {evolutions}
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

export default View;