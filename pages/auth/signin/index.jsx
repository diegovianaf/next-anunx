import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { signIn, useSession  } from 'next-auth/react'

import {
  Alert,
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
import useStyles from './styles'

const Signin = () => {
  const classes = useStyles()
  const router = useRouter()
  const { data: session } = useSession()

  console.log(session)

  const handleFormSubmit = (values) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: 'http://localhost:3000/user/dashboard',
    })
  }

  return (
    <TemplateDefault>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Typography component="h1" variant="h3" align="center" color="texPrimary">
          Login to your account
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
                    {
                      router.query.i === '1'
                        ? (
                          <Alert severity="error" className={classes.errorMessage}>
                            Invalid user or password!
                          </Alert>
                        )
                        : null
                    }
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
                            Log in
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

export default Signin
