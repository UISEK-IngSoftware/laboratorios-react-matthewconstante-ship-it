import { Grid } from "@mui/material";
import { pokemons } from "../data/pokemons"; 
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  return (
    <Grid container spacing={2}>
      {pokemons.map((pokemonItem) => (
        <Grid item xs={12} sm={6} md={4} key={pokemonItem.id}>
          <PokemonCard pokemon={pokemonItem} />
        </Grid>
      ))}
    </Grid>
  );
}