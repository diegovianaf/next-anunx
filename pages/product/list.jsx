import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: theme.spacing(0, 2),
  },
}))

const List = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="lg">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Paper component="form" className={classes.searchBox}>
              <InputBase
                placeholder="Search for anything"
                fullWidth
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Box className={classes.box}>
            <Typography component="h6" variant="h6">
              Advertisements
            </Typography>
            <Typography component="span" variant="subtitle2">
              3 ads found
            </Typography>
            <br /><br />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://source.unsplash.com/random?a=1'}
                  title='Product X'
                  subtitle='$60.00'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://source.unsplash.com/random?a=2'}
                  title='Product X'
                  subtitle='$60.00'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://source.unsplash.com/random?a=3'}
                  title='Product X'
                  subtitle='$60.00'
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

      </Container>
    </TemplateDefault>
  )
}

export default List
