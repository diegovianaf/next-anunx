import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  inputLabel: {
    fontWeight: 400,
    color: theme.palette.primary.main,
  }
}))

export default useStyles
