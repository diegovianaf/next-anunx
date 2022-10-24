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

import TemplateDefault from '../../src/templates/Default'

const Home = () => {
  return (
    <TemplateDefault>
      <ThemeProvider >
        <Container maxWidth="sm" style={{paddingTop: '2rem'}} align="center">
          <Typography variant="h2">My Products</Typography>
          <Button variant="contained" color="primary" style={{marginTop: '1rem'}}>Add new Product</Button>
        </Container>
        <Container maxWidth="md" style={{paddingTop: '3rem'}}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="194"
                  image={"https://source.unsplash.com/random"}
                  alt="Image Title"
                />
                <CardContent>
                  <Typography variant="h5">
                    Product X
                  </Typography>
                  <Typography>
                    $ 60.00
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
                  component="img"
                  height="194"
                  image={"https://source.unsplash.com/random"}
                  alt="Image Title"
                />
                <CardContent>
                  <Typography variant="h5">
                    Product X
                  </Typography>
                  <Typography>
                    $ 60.00
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
                  component="img"
                  height="194"
                  image={"https://source.unsplash.com/random"}
                  alt="Image Title"
                />
                <CardContent>
                  <Typography variant="h5">
                    Product X
                  </Typography>
                  <Typography>
                    $ 60.00
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
                  component="img"
                  height="194"
                  image={"https://source.unsplash.com/random"}
                  alt="Image Title"
                />
                <CardContent>
                  <Typography variant="h5">
                    Product X
                  </Typography>
                  <Typography>
                    $ 60.00
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
