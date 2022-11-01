import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  ThemeProvider,
  Typography
} from '@mui/material'

import { makeStyles } from '@mui/styles'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  carMedia: {
    paddingTop: '56%',
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <ThemeProvider >
        <Container maxWidth="sm" className={classes.container} align="center">
          <Typography component="h1" variant="h2">
            My Advertisements
          </Typography>
          <Button variant="contained" color="primary" className={classes.buttonAdd}>
            Publish new Advertisement
          </Button>
        </Container>
        <Container maxWidth="md">
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
                <CardActions>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                </CardActions>
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
                <CardActions>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                </CardActions>
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
                <CardActions>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                </CardActions>
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
                <CardActions>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </TemplateDefault>
  )
}

export default Home
