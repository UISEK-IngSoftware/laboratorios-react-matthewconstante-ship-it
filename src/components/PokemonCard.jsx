import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function PokemonCard({ pokemon }) {
    // 1. Usamos VITE_MEDIA_URL en lugar de la API URL
    const mediaUrl = import.meta.env.VITE_MEDIA_URL || "http://localhost:8000/media";
    
    // 2. Si pokemon.picture ya empieza con "http", la dejamos tal cual. 
    // Si es solo el nombre del archivo (ej: "pokemon.png"), le pegamos la URL base de media.
    const finalImageUrl = pokemon.picture?.startsWith('http') 
        ? pokemon.picture 
        : `${mediaUrl}/${pokemon.picture}`;

    return (
        <Card>
            <CardMedia 
                component="img" 
                height={300}
                image={finalImageUrl}
                alt={pokemon.name}
                // Si la imagen falla o no existe, ponemos una por defecto para que no quede en blanco
                onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=No+Image"; }}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {pokemon.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Type: {pokemon.type}
                </Typography>
            </CardContent>
        </Card>
    );
}