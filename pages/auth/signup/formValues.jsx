import * as yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConf: '',
}

const validationSchema = yup.object().shape({
  name: yup.string()
    .required('Required field'),
  email: yup.string()
    .email('Enter a valid email')
    .required('Required field!'),
  password: yup.string()
    .min(6, 'minimum 6 characters')
    .required('Required field'),
  passwordConf: yup.string()
    .required('Required field')
    .oneOf([yup.ref('password'), null], 'The passwords must be the same')
})

export {
  initialValues,
  validationSchema
}
