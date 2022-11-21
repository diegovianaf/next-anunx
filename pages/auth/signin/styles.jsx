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
  }
}))

export default useStyles
