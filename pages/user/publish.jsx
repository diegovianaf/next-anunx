import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography
} from '@mui/material'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@mui/styles'
import { DeleteForever } from '@mui/icons-material'

import TemplateDefault from '../../src/templates/Default'

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
  inputLabel: {
    fontWeight: 400,
    color: theme.palette.primary.main,
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

const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Enter a longer title')
    .max(100, 'Enter a smaller title')
    .required('Required field'),
  category: yup.string().required('Required field!'),
  description: yup.string()
    .min(50, 'Enter a description of at least 50 characters.')
    .required('Required field'),
  price: yup.number().required('Required field!'),
  firstName: yup.string().required('Required field!'),
  email: yup.string()
    .email('Enter a valid email')
    .required('Required field!'),
  phone: yup.number().required('Required field!'),
})

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
      <Formik
        initialValues={{
          title: '',
          category: '',
          description: '',
          price: '',
          email: '',
          firstName: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Ok!', values)
        }}
      >
        {
          ({
            values,
            errors,
            handleChange,
            handleSubmit,
          }) => {
            console.log(errors)

            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth="sm">
                  <Typography component="h1" variant="h3" align="center" color="textPrimary">
                    Publish your Advertisement
                  </Typography>
                  <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    the more detailed the better!
                  </Typography>
                </Container>

                <br /><br />

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FormControl error={errors.title} fullWidth>
                      <InputLabel className={classes.inputLabel}>Advertisement Title</InputLabel>
                      <OutlinedInput
                        name="title"
                        value={values.title}
                        label="Advertisement Title"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.title }
                      </FormHelperText>
                    </FormControl>
                    <br /><br />

                    <FormControl error={errors.category} fullWidth>
                      <InputLabel className={classes.inputLabel}>Category</InputLabel>
                      <Select
                        name="category"
                        value={values.category}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value="Animals">Animals</MenuItem>
                        <MenuItem value="Automotives">Automotives</MenuItem>
                        <MenuItem value="Children">Children</MenuItem>
                        <MenuItem value="Equipment and Tools">Equipment and Tools</MenuItem>
                        <MenuItem value="Farming">Farming</MenuItem>
                        <MenuItem value="Fashion">Fashion</MenuItem>
                        <MenuItem value="Furniture, Garden and House">Furniture, Garden and House</MenuItem>
                        <MenuItem value="Hobbies">Hobbies</MenuItem>
                        <MenuItem value="Job">Job</MenuItem>
                        <MenuItem value="Services">Services</MenuItem>
                        <MenuItem value="Sports">Sports</MenuItem>
                        <MenuItem value="Technology">Technology</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                      <FormHelperText>
                        { errors.category }
                      </FormHelperText>
                    </FormControl>
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
                    <FormControl error={errors.description} fullWidth>
                      <InputLabel className={classes.inputLabel}>Enter the details of what you are selling.</InputLabel>
                      <OutlinedInput
                        name="description"
                        value={values.description}
                        multiline
                        rows={6}
                        label="Enter the details of what you are selling."
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.description }
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FormControl error={errors.price} fullWidth>
                      <InputLabel className={classes.inputLabel}>Selling price</InputLabel>
                      <OutlinedInput
                        name="price"
                        value={values.price}
                        label="Selling price"
                        onChange={handleChange}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      />
                      <FormHelperText>
                        { errors.price }
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                      Contact Information
                    </Typography>

                    <FormControl error={errors.firstName} fullWidth>
                      <InputLabel className={classes.inputLabel}>Name</InputLabel>
                      <OutlinedInput
                        name="firstName"
                        value={values.firstName}
                        label="Name"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.firstName }
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl error={errors.email} fullWidth>
                      <InputLabel className={classes.inputLabel}>Email</InputLabel>
                      <OutlinedInput
                        name="email"
                        value={values.email}
                        label="Email"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.email }
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl error={errors.phone} fullWidth>
                      <InputLabel className={classes.inputLabel}>Phone Number</InputLabel>
                      <OutlinedInput
                        name="phone"
                        value={values.phone}
                        label="Phone Number"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.phone }
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box textAlign="right">
                    <Button type="submit" variant="contained" color="primary" size="large">
                      Publish Advertisement
                    </Button>
                  </Box>
                </Container>
              </form>
            )
          }
        }
      </Formik>
    </TemplateDefault>
  )
}

export default Publish
