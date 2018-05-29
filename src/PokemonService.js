import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

class PokemonService {
    constructor(props) {
        this.state = {
            client: new ApolloClient({
                uri: 'https://graphql-pokemon.now.sh/'
            })
        };
    }

    getList(closure) {
        this.state.client.query({
            query: gql`
            {
                pokemons(first: 42) {
                    id
                    name
                }
            }
            `
        }).then(closure);
    }

    getOne(closure, id) {
        this.state.client.query({
            query: gql`
            {
                pokemon(id: "${id}") {
                    number
                    name
                    weight {
                    minimum
                    maximum
                    }
                    height {
                    minimum
                    maximum
                    }
                    classification
                    types
                    resistant
                    weaknesses
                    evolutions {
                    id
                    name
                    }
                    image
                }
            }
            `
        }).then(closure);
    }
}

export default PokemonService;