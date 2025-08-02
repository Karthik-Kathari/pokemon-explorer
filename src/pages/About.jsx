import React from "react";


export default function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto", lineHeight: 1.6 , textAlign: "justify"}}>
      <h1 style={{textAlign: "center"}}>About This Web App</h1>
      <p>
        This web app is built using React and the PokéAPI, a free and open RESTful API providing detailed Pokémon data.
      </p>
      <p>
        You can browse Pokémon by category, view images, and check detailed info such as height, weight, and base experience.
      </p>
      <p>
        The app uses React hooks and react-router for smooth navigation and a better user experience.
      </p>

      <h2 style={{textAlign: "center"}}>About PokéAPI</h2>
      <p>
        PokéAPI (https://pokeapi.co/) is a community-driven project offering free access to Pokémon data sourced from official games.
      </p>
      <p>
        It enables developers to create tools, websites, and applications powered by reliable Pokémon information.
      </p>
    </div>
  );
}
