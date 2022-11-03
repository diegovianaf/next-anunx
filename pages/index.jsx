import {
  Paper,
  Container,
  IconButton,
  InputBase,
  Typography,
  Grid
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@mui/styles'
import Card from '../src/components/Card'

const useStyles = makeStyles((theme) => ({
  searchPaper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    padding: theme.spacing(0, 2),
  },
  cardGrid: {
    marginTop: 40,
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          What are you looking for?
        </Typography>
        <Paper className={classes.searchPaper}>
          <InputBase
            placeholder="Search for anything"
            fullWidth
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth="lg" className={classes.cardGrid}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
          Highlights
        </Typography>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title='Product X'
              subtitle='$60.00'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title='Product X'
              subtitle='$60.00'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title='Product X'
              subtitle='$60.00'
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home
