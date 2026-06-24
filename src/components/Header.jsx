import { AppBar, Button, Container, Toolbar } from "@mui/material";
import './Header.css'; 
import pokedexLogo from "../assets/pokemon-23.svg"; 
import './PokemonCard.css';
import { Link } from 'react-router-dom'; 

export default function Header() {
  return (
    <Container>
      <div className="pokedex-navbar">
        <AppBar position="static">
          {/* Primer Toolbar para el Logo */}
          <Toolbar sx={{ justifyContent: 'center', py: 1 }}>
            <div className="image-container">
              <img src={pokedexLogo} alt="Logo" height={100} />
            </div>
          </Toolbar>
          
          {/* Segundo Toolbar para los botones de navegación */}
          <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              Inicio
            </Button>
            <Button color="inherit" component={Link} to="/add">
              Agregar Pokémon
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
}