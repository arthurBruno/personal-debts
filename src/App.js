import {
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Home from './components/pages/Home';

const theme = createTheme({
  overrides: {
    MuiButton: {
      contained: {
        color: '#fff !important',
        padding: '10px 25px !important',
        backgroundColor: '#5C00A4 !important',
        borderRadius: '4px !important',
      },
      outlined: {
        color: '#5C00A4 !important',
        padding: '9px 15px !important',
        border: '1px solid rgba(92, 0, 164, 0.5) !important',
        borderRadius: '4px !important',
      },
    },
  },
  palette: {
    primary: {
      main: '#5C00A4',
    },
    secondary: {
      main: '#787878',
    },
    error: {
      main: '#d62046',
    },
    warning: {
      main: '#f17700',
    },
    info: {
      main: '#44a0db',
    },
    success: {
      main: '#48ae9f',
    },
    grey: {
      main: '#c3c3c3'
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: 96,
    },
    h2: {
      fontSize: 60,
      fontWeight: 300,
    },
    h3: {
      fontSize: 48,
      fontWeight: 300,
    },
    h4: {
      fontSize: 34,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 20,
    },
    subtitle2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 12,
      letterSpacing: 0.6,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 10,
      fontWeight: 300,
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="lg">
      <Home />
    </Container>
  </ThemeProvider>
);

export default App;
