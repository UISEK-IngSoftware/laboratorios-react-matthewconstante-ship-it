import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
// Cambiamos el import para que apunte exactamente al archivo en plural
import PokemonForm from './components/PokemonsForm'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/add" element={<PokemonForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;