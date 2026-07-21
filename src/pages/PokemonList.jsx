import { Grid, Typography } from '@mui/material';
import PokemonCard from '../components/PokemonCard';
import { useState, useEffect } from 'react';
import { fetchPokemons } from '../services/pokemonService';
import Spinner from '../components/spinner';

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);       
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchPokemons()
            .then((data) => {
                setPokemons(data);
            })
            .catch((err) => {
                setError(err);
                console.error("Error fetching pokemons:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); 

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return (
            <Typography variant="h6" color="error" align="center" sx={{ mt: 4 }}>
                Error al cargar los pokemons: {error.message || 'Ocurrió un error inesperado'}
            </Typography>
        );
    } // <- ¡Aquí estaba la llave que faltaba!

    return (
        <Grid container spacing={2} sx={{ p: 2 }}>
            {pokemons.map((pokemonItem) => (
                <Grid key={pokemonItem.id || pokemonItem.name} item xs={12} sm={6} md={4} lg={3}>
                    <PokemonCard pokemon={pokemonItem} />
                </Grid>
            ))}
        </Grid>
    );
}