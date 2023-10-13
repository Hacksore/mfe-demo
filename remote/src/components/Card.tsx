import React, { useEffect, useState } from "react";

const Nav = () => {
  // use the pokeapi and get a random pokemon name
  const [pokemon, setPokemon] = useState<string>("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((res) => res.json())
      .then((data) => {
        const randomPokemon =
          data.results[Math.floor(Math.random() * data.results.length)].name;
        setPokemon(randomPokemon);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 200,
        backgroundColor: "gray",
      }}
    >
      {pokemon}
    </div>
  );
};

export default Nav;
