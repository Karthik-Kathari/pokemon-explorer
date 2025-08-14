import React, { useEffect, useState } from "react";

export default function PokemonCard({ name, url, onClick }) {
  const [sprite, setSprite] = useState("");

  useEffect(() => {
    async function fetchImage() {
      const res = await fetch(url);
      const data = await res.json();
      setSprite(data.sprites.front_default);
    }

    fetchImage();
  }, [url]);

  return (
    <div className="pokemon-card" onClick={onClick}>
      <img src={sprite} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}
