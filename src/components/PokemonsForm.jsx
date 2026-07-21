import { Box, Button, TextField, Typography, Alert, MenuItem, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addPokemon } from '../services/pokemonService';

export default function PokemonForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [pokemonData, setPokemonData] = useState({
        name: "",
        type: "",
        weight: "",
        height: "",
        picture: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'picture') {
            setPokemonData({ ...pokemonData, picture: files[0] });
        } else {
            setPokemonData({ ...pokemonData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");

        try {
            await addPokemon(pokemonData);
            setIsSuccess(true);
            
            // Damos un pequeño retraso para que el usuario pueda ver el Snackbar antes de redirigir
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            console.error('Error al agregar el pokémon:', error);
            setErrorMsg('Error al agregar el pokémon. Por favor, inténtelo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 2 }}>
            <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                Formulario de Pokémon
            </Typography>
            
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Nombre"
                    variant="outlined"
                    name="name"
                    value={pokemonData.name}
                    onChange={handleChange}
                    required
                />
                
                <TextField
                    select
                    label="Tipo"
                    variant="outlined"
                    name="type"
                    value={pokemonData.type}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="A">Agua</MenuItem>
                    <MenuItem value="F">Fuego</MenuItem>
                    <MenuItem value="T">Tierra</MenuItem>
                    <MenuItem value="P">Planta</MenuItem>
                    <MenuItem value="E">Eléctrico</MenuItem>
                    <MenuItem value="L">Lucha</MenuItem>
                </TextField>

                <TextField
                    label="Peso"
                    variant="outlined"
                    type="number"
                    name="weight"
                    value={pokemonData.weight}
                    onChange={handleChange}
                />
                
                <TextField
                    label="Altura"
                    variant="outlined"
                    type="number"
                    name="height"
                    value={pokemonData.height}
                    onChange={handleChange}
                />

                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                    Imagen del Pokémon:
                </Typography>
                <input type="file" name="picture" accept="image/*" onChange={handleChange} required />

                {errorMsg && (
                    <Alert severity="error">
                        {errorMsg}
                    </Alert>
                )}
                
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    disabled={loading}
                    sx={{ padding: "10px", fontWeight: "bold" }}
                >
                    {loading ? 'Guardando...' : 'Guardar'}
                </Button>
            </Box>

            {/* El Snackbar ahora vive dentro del Box principal */}
            <Snackbar
                open={isSuccess}
                autoHideDuration={6000}
                onClose={() => setIsSuccess(false)}
                message="Pokémon agregado exitosamente"
            />
        </Box>
    );
}