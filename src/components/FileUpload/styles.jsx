import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  mainImage: {},
  mask: {},
  thumbsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  dropzone: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
    cursor: 'pointer',
    display: 'flex',
    height: 150,
    justifyContent: 'center',
    margin: '0 15px 15px 0',
    padding: 10,
    textAlign: 'center',
    width: 186,
  },
  thumb: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: 150,
    margin: '0 15px 15px 0',
    position: 'relative',
    width: 186,

    '& $mainImage': {
      backgroundColor: 'darkgreen',
      bottom: 0,
      left: 0,
      padding: '6px 10px',
      position: 'absolute',
    },

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mask': {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'none',
      height: '100%',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
    }
  },
}))

export default useStyles
