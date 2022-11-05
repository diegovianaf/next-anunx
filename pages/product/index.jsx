import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Carousel from 'react-material-ui-carousel'
import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  productName: {
    margin: '15px 0',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    height: '100%',
  },
  cardMedia: {
    paddingTop: '56%'
  },
}))

const Product = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box className={classes.box}>
              <Carousel
                autoPlay={false}
                animation='slide'
                navButtonsAlwaysVisible
                navButtonsProps={{
                  style: {
                    color: 'white',
                  }
                }}
              >
                <Card className={classes.card}>
                  <CardMedia
                    image='https://source.unsplash.com/random?a=1'
                    title='Image Title'
                    className={classes.cardMedia}
                  />
                </Card>
                <Card className={classes.card}>
                  <CardMedia
                    image='https://source.unsplash.com/random?a=2'
                    title='Image Title'
                    className={classes.cardMedia}
                  />
                </Card>
              </Carousel>
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="span" variant="caption">Published June 16, 2021</Typography>
              <Typography component="h4" variant="h4" className={classes.productName}>Kindle Paperwhite 2.0</Typography>
              <Typography component="h4" variant="h4" className={classes.price}>$ 48.00</Typography>
              <Chip label="Category" />
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="h6" variant="h6">Description</Typography>
              <Typography component="p" variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, qui! Autem nulla debitis voluptates unde a nobis facere iure sapiente ullam expedita hic, dolore inventore nihil sint esse ad harum.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Card elevation={0} className={classes.box}>
              <CardHeader
                avatar={
                  <Avatar>D</Avatar>
                }
                title='Diego Viana'
                subheader='diegovianaf7@gmail.com'
              />
              <CardMedia
                image='https://source.unsplash.com/random'
                title='Diego Viana'
              />
            </Card>

            <Box className={classes.box}>
              <Typography component="h6" variant="h6">
                Location
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Product
