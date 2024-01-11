import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useQueryPokemonPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
<<<<<<< HEAD

  async function getPokemonPage({ page = 1, limit = 30 }) {
    const offset = (page - 1) * limit;
    const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

    const pokemonPromises = data.results.map(async (pokemon: { url: string }) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });
=======
  async function getPokemonPage({ page = 1, limit = 30 }) {
    const offset = (page - 1) * limit;

    //Api
    const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

    const pokemonPromises = data.results.map(
      async (pokemon: { url: string }) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      }
    );
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754

    const pokemonData = await Promise.all(pokemonPromises);

    const totalPokemon = data.count;
<<<<<<< HEAD
    const totalPagesAPI = Math.ceil(totalPokemon / limit);

    if (totalPages != totalPagesAPI) {
      setTotalPages(totalPagesAPI);
=======
    const totalPageAPI = Math.ceil(totalPokemon / limit);

    if (totalPages != totalPageAPI) {
      setTotalPages(totalPageAPI);
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
    }

    return pokemonData as Pokemon[];
  }

  function nextPage() {
    setPage((prevValue) => prevValue + 1);
    navigate(`?page=${page + 1}`);
  }

  function prevPage() {
    setPage((prevValue) => prevValue - 1);
    navigate(`?page=${page - 1}`);
  }
<<<<<<< HEAD

=======
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
  const query = useQuery({
    queryKey: ["getPokemonPage", page, limit],
    queryFn: () => getPokemonPage({ page, limit }),
  });

  return {
    ...query,
    page,
    totalPages,
    setLimit,
    nextPage,
    prevPage,
  };
}
