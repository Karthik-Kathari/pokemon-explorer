import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25");
      const data = await res.json();

      const pokemons = data.results.map((_, index) => ({
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`,
      }));

      setPokemonList(pokemons);
    }

    fetchPokemons();
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center", backgroundColor: "#F5F5F5" }}>
      {/* Title */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "600",
          textShadow: "2px 2px 10px rgba(251, 255, 0, 1)",
          letterSpacing: "21px",
          wordSpacing: "5px",
        }}
      >
        Pokémon World Awaits
      </h1>

      {/* Subtitle */}
      <p>Explore and discover your favorite Pokémon.</p>

      {/* Marquee with Pokémon images */}
      <div
        style={{
          backgroundColor: "#F5F5F5", // Matches the page background
          padding: "20px 0",
          overflow: "hidden",
        }}
      >
        <Marquee
          speed={50}
          gradient={false} // Set to false to remove edge fade
          style={{ marginBottom: "50px" }}
        >
          {pokemonList.map((pokemon) => (
            <img
              key={pokemon.id}
              src={pokemon.img}
              alt={`Pokemon ${pokemon.id}`}
              style={{
                marginTop: "90px",
                width: "200px",
                height: "180px",
                objectFit: "contain",
                marginRight: "100px",
              }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
