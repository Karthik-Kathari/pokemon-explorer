import React, { useEffect, useState } from "react";

export default function PokemonDetail({ url }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(url);
      const data = await res.json();
      setDetails(data);
    }

    fetchDetails();
  }, [url]);

  if (!details) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p>Loading is shown!</p>
      <img src="https://lottiefiles.com/free-animation/material-wave-loading-yt2uoeE83o" alt="Loading..." width="80" />
    </div>
  );
}


  return (
    <div
      style={{
        border: "1px solid #000",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{details.name}</h2>
      <img src={details.sprites.front_default} alt={details.name} />
      <p>
        <strong>Height:</strong> {details.height}
      </p>
      <p>
        <strong>Weight:</strong> {details.weight}
      </p>
      <p>
        <strong>Base experience:</strong> {details.base_experience}
      </p>
    </div>
  );
}
