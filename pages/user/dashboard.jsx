import {
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography
} from '@mui/material'

import { makeStyles } from '@mui/styles'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Card from '../../src/components/Card'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles(() => ({
  centerContainer: {
    textAlign: 'center',
  },
  buttonAdd: {
    margin: '30px auto',
  },
}))

const Home = () => {
  const classes = useStyles()

  const { data: session } = useSession()

  return (
    <TemplateDefault>
      <ThemeProvider >
        <Container maxWidth="sm" className={classes.centerContainer}>
          <Typography component="h1" variant="h2" align="center">
            My Advertisements
          </Typography>
          <Link
            href={session ? '/user/publish' : '/auth/signin'}
            passHref
          >
            <Button variant="contained" color="primary" className={classes.buttonAdd}>
              Publish new Advertisement
            </Button>
          </Link>
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
