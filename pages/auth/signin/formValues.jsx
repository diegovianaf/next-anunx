import * as yup from 'yup'

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('Enter a valid email')
    .required('Required field!'),
  password: yup.string()
    .min(6, 'minimum 6 characters')
    .required('Required field'),
})

export {
  initialValues,
  validationSchema
}
