import {
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  carMedia: {
    paddingTop: '56%',
  },
}))

const Card = ({ image, title, subtitle, actions }) => {
  const classes = useStyles()

  return (
    <CardMUI>
      <CardMedia
        className={classes.cardMedia}
        component='img'
        height='194'
        image={image}
        title={title}
      />
      <CardContent>
        <Typography component="h2" variant="h5">
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </CardContent>
      {
        actions
          ? (
            <CardActions>
              {actions}
            </CardActions>
          ) : null
      }
    </CardMUI>
  )
}

export default Card
