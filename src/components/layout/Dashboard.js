import React, { Component } from "react";
import styled from "styled-components";
import PokemonList from "../pokemon/PokemonList";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;
  margin-top: none;
  padding-top: none;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-right: 10px;
  background-color: #fe0065;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
  overflow: scroll;
`;

/*
const Background = styled.div`
  background-color: #fff;
`;
*/

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <List>
            <PokemonList />
          </List>
        </div>
      </div>
    );
  }
}
