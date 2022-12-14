import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'

const Signup = () => {
  const classes = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()

  const handleFormSubmit = async (values) => {
    const response = await axios.post('/api/users', values)

    if (response.data.success) {
      setToasty({
        open: true,
        severity: 'success',
        text: 'Signing up completed successfully!'
      })

      router.push('/auth/signin')
    }
  }

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
            onSubmit={handleFormSubmit}
          >
            {
              ({
                touched,
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
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

                    {
                      isSubmitting
                        ? (
                          <CircularProgress className={classes.loading} />
                        ) : (
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
                        )
                    }
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
