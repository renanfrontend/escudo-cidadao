import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a8c7fa', // Azul característico do Gemini
      light: '#d3e3fd',
      dark: '#0842a0',
    },
    secondary: {
      main: '#c58af9', // Roxo vibrante (vibe IA)
    },
    error: {
      main: '#f28b82',
    },
    success: {
      main: '#81c995', // Verde premium
    },
    background: {
      default: '#131314', // Fundo super escuro
      paper: '#1e1f20',   // Fundo dos cards/menus
    },
    text: {
      primary: '#e3e3e3', 
      secondary: '#c4c7c5',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16, 
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#131314',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
});