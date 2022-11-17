import { Formik } from 'formik'
import TemplateDefault from '../../../src/templates/Default'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material'

import { initialValues, validationSchema } from './formValues'
import useStyles from './styles'

const Signup = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Typography component="h1" variant="h3" align="center" color="texPrimary">
          Create your account
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="texPrimary">
          and advertise for all of Europe
        </Typography>
      </Container>

      <Container maxWidth="sm">
        <Box className={classes.box}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('ok, form sent', values)
            }}
          >
            {
              ({
                touched,
                values,
                errors,
                handleChange,
                handleSubmit,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <FormControl error={errors.name && touched.name} className={classes.formControl} fullWidth>
                      <InputLabel>Name</InputLabel>
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

                    <FormControl error={errors.email && touched.email} className={classes.formControl} fullWidth>
                      <InputLabel>Email</InputLabel>
                      <OutlinedInput
                        name="email"
                        type="email"
                        value={values.email}
                        label="Email"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.email && touched.email ? errors.email : null }
                      </FormHelperText>
                    </FormControl>

                    <FormControl error={errors.password && touched.password} className={classes.formControl} fullWidth>
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        name="password"
                        type="password"
                        value={values.password}
                        label="Password"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.password && touched.password ? errors.password : null }
                      </FormHelperText>
                    </FormControl>

                    <FormControl error={errors.passwordConf && touched.passwordConf} className={classes.formControl} fullWidth>
                      <InputLabel>Confirm Password</InputLabel>
                      <OutlinedInput
                        name="passwordConf"
                        type="password"
                        value={values.passwordConf}
                        label="Confirm Password"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.passwordConf && touched.passwordConf ? errors.passwordConf : null }
                      </FormHelperText>
                    </FormControl>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.submit}
                    >
                      Sign up
                    </Button>
                  </form>
                )
              }
            }
          </Formik>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Signup
