import * as yup from 'yup'

const initialValues = {
  title: '',
  category: '',
  description: '',
  price: '',
  email: '',
  name: '',
  phone: '',
  files: [],
}

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
  name: yup.string().required('Required field!'),
  email: yup.string()
    .email('Enter a valid email')
    .required('Required field!'),
  phone: yup.number().required('Required field!'),
  files: yup.array()
    .min(1, 'Add at least one image')
    .required('Required field!'),
})

export {
  initialValues,
  validationSchema,
}
