import { Box, Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6),
    },
  },
  footerLink: {
    cursor: 'pointer',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
              <Typography color="textSecondary" variant="subtitle1" className={classes.footerLink}>Help and Contact</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
            <Typography color="textSecondary" variant="subtitle1" className={classes.footerLink}>Security Tips</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
            <Typography color="textSecondary" variant="subtitle1" className={classes.footerLink}>Advertise and Sell</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
            <Typography color="textSecondary" variant="subtitle1" className={classes.footerLink}>Professional Plan</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
