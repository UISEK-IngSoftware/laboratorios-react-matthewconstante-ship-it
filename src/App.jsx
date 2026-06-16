import './App.css'
import Header from './components/Header' 
import PokemonList from './components/PokemonList' 
import { Container } from '@mui/material' 

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <PokemonList /> 
      </Container> {/* ➜ CORREGIDO: Sin la "/" al final */}
    </>
  )
}

export default App