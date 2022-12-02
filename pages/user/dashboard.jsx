import {
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography
} from '@mui/material'

import { makeStyles } from '@mui/styles'
import Card from '../../src/components/Card'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles(() => ({
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
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center">
            My Advertisements
          </Typography>
          <Button variant="contained" color="primary" className={classes.buttonAdd}>
            Publish new Advertisement
          </Button>
        </Container>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Product X'
                subtitle='$60.00'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="primary">
                      Remove
                    </Button>
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Product X'
                subtitle='$60.00'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="primary">
                      Remove
                    </Button>
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Product X'
                subtitle='$60.00'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="primary">
                      Remove
                    </Button>
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Product X'
                subtitle='$60.00'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="primary">
                      Remove
                    </Button>
                  </>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </TemplateDefault>
  )
}

Home.requireAuth = true

export default Home
