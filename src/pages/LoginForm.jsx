import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authServices'; 
import "./LoginForm.css"; 

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Limpia errores anteriores
        
        try {
            await login(username, password);
            navigate("/"); // Redirige al inicio si todo sale bien
        } catch (err) {
            console.error("Error al iniciar sesión:", err);
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <Box component="form" className="login-form" onSubmit={handleLogin}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Inicio de sesión
            </Typography>

            {error && (
                <Typography color="error" sx={{ mb: 2, fontSize: '0.9rem', textAlign: 'center' }}>
                    {error}
                </Typography>
            )}

            <TextField 
                label="Usuario" 
                variant="outlined" 
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2 }}
            />
            
            <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
            />
            
            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
                fullWidth
                sx={{ padding: "10px", fontWeight: "bold" }}
            >
                Iniciar sesión
            </Button>
        </Box>
    );
}