import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BC662E',
      color: '#BC662E',
      background: '#ffffff',
      // white: '#f78a36',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Roboto Slab',
      color: '#BC662E',
    },
  },
});

export default theme;
