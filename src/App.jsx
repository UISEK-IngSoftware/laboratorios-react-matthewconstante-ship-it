import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import LoginForm from './pages/LoginForm';
import PokemonList from './pages/PokemonList'; 
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
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;