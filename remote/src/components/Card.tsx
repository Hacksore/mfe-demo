import React, { useEffect, useState } from "react";

const Nav = () => {
  // use the pokeapi and get a random pokemon name
  const [pokemon, setPokemon] = useState<string>("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        const randomPokemon = data.results[
          Math.floor(Math.random() * data.results.length)
        ].name;
        setPokemon(randomPokemon);
      });
  } , []);


  return (
    <div style={{ width: 200, height: 200, backgroundColor: "lightblue" }}>
      {pokemon}
    </div>
  );
};

export default Nav;
