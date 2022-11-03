import { DeleteForever } from '@mui/icons-material'
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
  Typography
} from '@mui/material'

import { makeStyles } from '@mui/styles'
import TemplateDefault from '../../src/templates/Default'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  mainImage: {},
  mask: {},
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  thumbsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  dropzone: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
    cursor: 'pointer',
    display: 'flex',
    height: 150,
    justifyContent: 'center',
    margin: '0 15px 15px 0',
    padding: 10,
    textAlign: 'center',
    width: 186,
  },
  thumb: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: 150,
    margin: '0 15px 15px 0',
    position: 'relative',
    width: 186,

    '& $mainImage': {
      backgroundColor: 'darkgreen',
      bottom: 0,
      left: 0,
      padding: '6px 10px',
      position: 'absolute',
    },

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mask': {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'none',
      height: '100%',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
    }
  },
}))

const Publish = () => {
  const classes = useStyles()
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map((file) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFiles([
        ...files,
        ...newFiles,
      ])
    }
  })

  const handleRemoveFile = (fileName) => {
    const newFileState = files.filter((file) => file.name !== fileName)
    setFiles(newFileState)
  }

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
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
          <Box className={classes.thumbsContainer}>
            <Box className={classes.dropzone} {...getRootProps()}>
              <input {...getInputProps()} />
              <Typography variant="body2" color="textPrimary">
                Click to add or drag the image here.
              </Typography>
            </Box>

            {
              files.map((file, index) => (
                <Box
                  key={file.name}
                  className={classes.thumb}
                  style={{ backgroundImage: `url(${file.preview})` }}
                >
                  {
                    index === 0 ?
                      <Box className={classes.mainImage}>
                        <Typography variant="body2" color="secondary">
                          Main Image
                        </Typography>
                      </Box>
                    : null
                  }
                  <Box className={classes.mask}>
                    <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                      <DeleteForever fontSize="large" />
                    </IconButton>
                  </Box>
                </Box>
              ))
            }
          </Box>
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
          <Typography componet="h6" variant="h6" color="textPrimary">
            Price
          </Typography>
          <br />
          <FormControl fullWidth>
            <InputLabel>Amount</InputLabel>
            <OutlinedInput
              onChange={() => {}}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Amount"
              labelWith={40}
            />
          </FormControl>
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
