import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import PokemonDetail from "../components/PokemonDetail";

export default function Category() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    maxHeight: "",
    maxWeight: "",
    maxBaseExp: "",
  });
  const [sortKey, setSortKey] = useState("none");

  const itemsPerPage = 8;

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1008`);
      const data = await res.json();
      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );
      setPokemons(detailedData);
    }
    fetchPokemons();
  }, []);

  // Filtering
  const filteredPokemons = pokemons.filter((p) => {
    const { maxHeight, maxWeight, maxBaseExp } = filter;
    if (maxHeight !== "" && p.height > Number(maxHeight)) return false;
    if (maxWeight !== "" && p.weight > Number(maxWeight)) return false;
    if (maxBaseExp !== "" && p.base_experience > Number(maxBaseExp)) return false;
    return true;
  });

  // Sorting by selected key
  let sortedPokemons = [...filteredPokemons];
  if (sortKey !== "none") {
    sortedPokemons.sort((a, b) => b[sortKey] - a[sortKey]); // Descending order
  }

  // Pagination slicing
  const startIndex = (page - 1) * itemsPerPage;
  const currentPokemons = sortedPokemons.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(sortedPokemons.length / itemsPerPage);

  // Handlers
  const handleFilterChange = (e) => {
    setPage(1);
    setFilter({ ...filter, [e.target.name]: e.target.value });
    setSelectedPokemonUrl(null);
  };

  const handleSortChange = (e) => {
    setSortKey(e.target.value);
    setPage(1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
    setSelectedPokemonUrl(null);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
    setSelectedPokemonUrl(null);
  };

  return (
    <div className="category-page">

      {/* --- Inline Filter + Sort Bar --- */}
      <div className="inline-sort-bar">
        <span>Filter: </span>
        <input
          type="number"
          name="maxHeight"
          value={filter.maxHeight}
          onChange={handleFilterChange}
          placeholder="Max Height"
          style={{ width: 100 }}
        />
        <input
          type="number"
          name="maxWeight"
          value={filter.maxWeight}
          onChange={handleFilterChange}
          placeholder="Max Weight"
          style={{ width: 100 }}
        />
        <input
          type="number"
          name="maxBaseExp"
          value={filter.maxBaseExp}
          onChange={handleFilterChange}
          placeholder="Max Base Exp"
          style={{ width: 120 }}
        />

        <span style={{ marginLeft: 30, marginRight: 10 }}>Sort by:</span>
        <label>
          <input
            type="radio"
            name="sort"
            value="height"
            checked={sortKey === "height"}
            onChange={handleSortChange}
          />
          Height
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="weight"
            checked={sortKey === "weight"}
            onChange={handleSortChange}
          />
          Weight
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="base_experience"
            checked={sortKey === "base_experience"}
            onChange={handleSortChange}
          />
          Base Exp
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="none"
            checked={sortKey === "none"}
            onChange={handleSortChange}
          />
          None
        </label>
      </div>

      {/* --- Cards and Details Side by Side --- */}
      <div className="category-content">
        <div className="pokemon-grid">
          {currentPokemons.length > 0 ? (
            currentPokemons.map((p) => (
              <PokemonCard
                key={p.name}
                name={p.name}
                url={`https://pokeapi.co/api/v2/pokemon/${p.id}/`}
                onClick={() =>
                  setSelectedPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${p.id}/`)
                }
              />
            ))
          ) : (
            <p>No Pokémon match the filter.</p>
          )}
        </div>

        <div className="pokemon-detail-side">
          {selectedPokemonUrl ? (
            <PokemonDetail url={selectedPokemonUrl} />
          ) : (
            <div>Select a Pokémon to see details</div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination-controls">
        <button onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <button onClick={handleNext} disabled={page === totalPages || totalPages === 0}>
          Next
        </button>
      </div>
    </div>
  );
}
