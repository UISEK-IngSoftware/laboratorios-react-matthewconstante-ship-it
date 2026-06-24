import { Typography, Box, TextField, Button } from "@mui/material"; 
import { useState } from "react";

export default function PokemonForm() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [picture, setPicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos listos para enviar:", { nombre, tipo, peso, altura, picture });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
        Formulario de Pokémon
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 400,
          mt: 2
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
        />
        <TextField
          label="Tipo"
          variant="outlined"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          fullWidth
        />
        <TextField
          label="Peso"
          variant="outlined"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          fullWidth
        />
        <TextField
          label="Altura"
          variant="outlined"
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          fullWidth
        />
        <input 
          type="file" 
          name="picture" 
          accept="image/*" 
          onChange={(e) => setPicture(e.target.files[0])}
          style={{ marginTop: '8px', marginBottom: '8px' }}
        />
        <Button variant="contained" color="primary" type="submit" size="large">
          Guardar
        </Button>
      </Box>
    </>
  );
}