import {
  Paper,
  Container,
  IconButton,
  InputBase,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    padding: theme.spacing(8, 10, 6),
  },
  searchPaper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    padding: theme.spacing(0, 2),
  },
  carMedia: {
    paddingTop: '56%',
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="md" className={classes.searchContainer}>
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

      <Container maxWidth="md" className={classes.cardGrid}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
          Highlights
        </Typography>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                height="194"
                image={"https://source.unsplash.com/random"}
                alt="Image Title"
              />
              <CardContent>
                <Typography component="h2" variant="h5">
                  Product X
                </Typography>
                <Typography>
                  $60.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                height="194"
                image={"https://source.unsplash.com/random"}
                alt="Image Title"
              />
              <CardContent>
                <Typography component="h2" variant="h5">
                  Product X
                </Typography>
                <Typography>
                  $60.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                height="194"
                image={"https://source.unsplash.com/random"}
                alt="Image Title"
              />
              <CardContent>
                <Typography component="h2" variant="h5">
                  Product X
                </Typography>
                <Typography>
                  $60.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home
