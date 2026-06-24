import { Grid } from '@mui/material'
import PokemonCard from './PokemonCard'
import { useState, useEffect } from 'react'
import { fetchPokemons } from '../services/pokemonService'


export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
            fetchPokemons().then((data) => {
                setPokemons(data);
            }).catch((error) => {
                alert("Error obteniendo pokemons. Por favor, intente nuevamente más tarde.");
                console.error("Error fetching pokemons:", error);
            })
        }, []); 



    return (
        <Grid container spacing={2}>
            {pokemons.map(
                (pokemonItem) => (
                    <Grid key={pokemonItem.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <PokemonCard pokemon={pokemonItem} />
                    </Grid>
                )
            )}
        </Grid>
    )
}