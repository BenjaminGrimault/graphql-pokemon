import React, { Component } from 'react';

import PokemonService from './PokemonService.js';

import ListItem from './ListItem.js';

class List extends Component {
    constructor(props) {
        super(props);

        let pokemons = [];
        const pokemonService = new PokemonService();

        pokemonService.getList((result) => {
            this.setState({
                pokemons: result.data.pokemons
            });
        });

        this.state = {
            pokemons: pokemons
        };
    }

    render() {
        const list = [];

        for (let item of this.state.pokemons) {
            list.push(<ListItem key={item.id} name={item.name} pokemonId={item.id} />);
        }

        return (
            <div>
                <div>Pokedex 42</div>

                { list.length > 0 ?
                <div>{list}</div>
                : <div>Loading...</div> }
            </div>
        );
    }
}

export default List;
