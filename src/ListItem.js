import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ListItem extends Component {
    render() {
        let link = '/view/' + this.props.pokemonId;

        return (
            <div>
                <Link to={link}><div>{this.props.name}</div></Link>
            </div>
        );
    }
}

export default ListItem;