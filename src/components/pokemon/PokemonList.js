import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import ScrollAnimation from "react-animate-on-scroll";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=20",
    pokemon: [],
    itemsCountPerPage: 20,
    activePage: 1
  };

  loadPokemon = () => {
    axios
      .get(this.state.url)
      .then(res => {
        this.setState(prevState => {
          const pokemon = prevState.pokemon;
          return {
            pokemon: [...prevState.pokemon, ...res.data.results],
            url: res.data.next
          };
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    console.log(this.state.pokemon);
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            <InfiniteScroll
              pageStart={1}
              loadMore={this.loadPokemon}
              hasMore={true}
              threshold={0}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              {this.state.pokemon.map((pokemon, i) => (
                <PokemonCard
                  key={pokemon.name + i}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
            </InfiniteScroll>
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
      </React.Fragment>

      /*<React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
      </React.Fragment>*/
    );
  }
}
