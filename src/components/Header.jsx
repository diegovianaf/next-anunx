import { AccountCircle } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6,
  },
  divider: {
    margin: '8px 0',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Anunx
            </Typography>
            <Link href="/user/publish" passHref>
              <Button color="inherit" variant="outlined">
                Advertise and Sell
              </Button>
            </Link>
            <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                ? <Avatar src="" />
                : <AccountCircle />
              }
              <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                Diego Viana
              </Typography>
            </IconButton>
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>My Advertisements</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publish new Advertisement</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem>Log out</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
