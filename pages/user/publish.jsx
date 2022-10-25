import {
  Box,
  Button,
  Container,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
}))

const Publish = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          Publish your Advertisement
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="textPrimary">
          the more detailed the better!
        </Typography>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Advertisement Title
          </Typography>
          <TextField
            label="ex.: Bike with 3 months warranty"
            size="small"
            fullWidth
            variant="standard"
          />

          <br /><br />
          <Typography component="h6" variante="h6" color="textPrimary">
            Category
          </Typography>
          <Select
            native
            value=""
            fullWidth
            onChange={() => {}}
            inputProps={{
              name: 'age',
            }}
          >
            <option value="">Select</option>
            <option value={1}>Animals</option>
            <option value={2}>Automotives</option>
            <option value={3}>Children</option>
            <option value={4}>Equipment and Tools</option>
            <option value={5}>Farming</option>
            <option value={6}>Fashion</option>
            <option value={7}>Furniture, Garden and House</option>
            <option value={8}>Hobbies</option>
            <option value={9}>Job</option>
            <option value={10}>Services</option>
            <option value={11}>Sports</option>
            <option value={12}>Technology</option>
            <option value={13}>Other</option>
          </Select>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Images
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            The first image is the main one of your advertisement.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Description
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            Enter the details of what you are selling.
          </Typography>
          <TextField
            multiline
            rows={6}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
            Contact Information
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /><br />
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /><br />
          <TextField
            label="Phone Number"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /><br />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box textAlign="right">
          <Button variant="contained" color="primary" size="large">
            Publish Advertisement
          </Button>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Publish
