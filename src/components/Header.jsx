import React, { useState, useEffect } from "react";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { isLoggedIn, logout } from "../services/authServices"; 
import { useLocation } from "react-router-dom";
import pokedexLogo from '../assets/PokedexLogo.png';
import './Header.css';

export default function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    const location = useLocation();

    // Cada vez que cambie la URL (ruta), volvemos a verificar el estado de la sesión
    useEffect(() => {
        setLoggedIn(isLoggedIn());
    }, [location.pathname]);

    const handleLogout = async () => {
        try {
            await logout();
            window.location.href = '/'; // Redirige al inicio limpiando el estado global
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <Container>
            <div className="pokedex-navbar">
                <AppBar position="static">
                    <Toolbar>
                        <div className="image-container">
                            <img src={pokedexLogo} alt="Pokédex Logo" />
                        </div>
                    </Toolbar>
                    <Toolbar>
                        <Button color="inherit" href="/">Inicio</Button>
                        {loggedIn ? (
                            <>
                                <Button color="inherit" href="/add">Agregar Pokemon</Button>
                                <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
                            </>
                        ) : (
                            <Button color="inherit" href="/login">Iniciar Sesión</Button>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        </Container>
    );
}