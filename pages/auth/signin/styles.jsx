import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: 30,
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  loading: {
    display: 'block',
    margin: '10px auto',
  },
  errorMessage: {
    margin: '20px 0',
  },
  orSeparator: {
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    display: 'flex',
    height: 1,
    justifyContent: 'center',
    margin: theme.spacing(4, 0),
    width: '100%',

    '& span': {
      backgroundColor: 'white',
      padding: '0 30px',
    }
  }
}))

export default useStyles
