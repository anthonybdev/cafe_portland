import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f78a36',
      color: '#f78a36',
      background: '#ffffff',
      // white: '#f78a36',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Arvo',
      color: '#f78a36',
    },
  },
});

export default theme;
