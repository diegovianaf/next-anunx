import { Formik } from 'formik'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import FileUpload from '../../../src/components/FileUpload'
import { initialValues, validationSchema } from './formValues'

import useStyles from './styles'

const Publish = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Ok!', values)
        }}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => {

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
                    <FormControl error={errors.title && touched.title} fullWidth>
                      <InputLabel className={classes.inputLabel}>Advertisement Title</InputLabel>
                      <OutlinedInput
                        name="title"
                        value={values.title}
                        label="Advertisement Title"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.title && touched.title ? errors.title : null }
                      </FormHelperText>
                    </FormControl>
                    <br /><br />

                    <FormControl error={errors.category && touched.category} fullWidth>
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
                        { errors.category && touched.category ? errors.category : null }
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FileUpload
                      files={values.files}
                      errors={errors.files}
                      touched={touched.files}
                      setFieldValue={setFieldValue}
                    />
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FormControl error={errors.description && touched.description} fullWidth>
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
                        { errors.description && touched.description ? errors.description : null }
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FormControl error={errors.price && touched.price} fullWidth>
                      <InputLabel className={classes.inputLabel}>Selling price</InputLabel>
                      <OutlinedInput
                        name="price"
                        value={values.price}
                        label="Selling price"
                        onChange={handleChange}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      />
                      <FormHelperText>
                        { errors.price && touched.price ? errors.price : null }
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                      Contact Information
                    </Typography>

                    <FormControl error={errors.name && touched.name} fullWidth>
                      <InputLabel className={classes.inputLabel}>Name</InputLabel>
                      <OutlinedInput
                        name="name"
                        value={values.name}
                        label="Name"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.name && touched.name ? errors.name : null }
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl error={errors.email && touched.email} fullWidth>
                      <InputLabel className={classes.inputLabel}>Email</InputLabel>
                      <OutlinedInput
                        name="email"
                        value={values.email}
                        label="Email"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.email && touched.email ? errors.email : null }
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl error={errors.phone && touched.phone} fullWidth>
                      <InputLabel className={classes.inputLabel}>Phone Number</InputLabel>
                      <OutlinedInput
                        name="phone"
                        value={values.phone}
                        label="Phone Number"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.phone && touched.phone ? errors.phone : null }
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

Publish.requireAuth = true

export default Publish
