import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Cambia a 'dark' si quieres modo oscuro global
    primary: {
      main: '#DC0A2D', // Rojo clásico Pokédex
      light: '#FF3B56',
      dark: '#8B0000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#28AAFD', // Azul pantalla Pokédex
      light: '#6FD1FF',
      dark: '#0070B8',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F7F7F7', // Fondo suave para hacer resaltar las cartas
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1D1D1D',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 800,
      letterSpacing: '0.5px',
      color: '#DC0A2D',
    },
    h5: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none', // Desactiva Mayúsculas automáticas en los botones
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 12, // Bordes redondeados y modernos
  },
  components: {
    // Estilos personalizados para los Botones
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Estilo pill / redondeado tipo Pokédex
          padding: '8px 20px',
          boxShadow: '0 4px 10px rgba(220, 10, 45, 0.2)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 15px rgba(220, 10, 45, 0.3)',
          },
        },
      },
    },
    // Estilos personalizados para las Cards (Tarjetas de Pokémon)
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    // Estilos para las cajas de texto (Formularios)
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
  },
});

export default theme;