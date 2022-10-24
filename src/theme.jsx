import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#7415e0',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
