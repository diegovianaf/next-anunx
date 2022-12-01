import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { makeStyles } from '@mui/styles'

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

import { AccountCircle } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  headerButton: {
    marginRight: 10,
  },
  userName: {
    marginLeft: 8,
  },
  divider: {
    margin: '8px 0',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const { data: session } = useSession()

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Link href="/" passHref>
              <Typography variant="h6" className={classes.title}>
                Anunx
              </Typography>
            </Link>
            <Link
              href={session ? '/user/publish' : '/auth/signin'}
              passHref
            >
              <Button color="inherit" variant="outlined" className={classes.headerButton}>
                Advertise and Sell
              </Button>
            </Link>
            {
              session
                ? (
                  <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                    {
                      session.user.image
                        ? <Avatar src={session.user.image} />
                        : <AccountCircle />
                    }
                    <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                      {session.user.name}
                    </Typography>
                  </IconButton>
                ) : null
            }
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
              <MenuItem onClick={() => signOut({
                callbackUrl: '/'
              })}>
                Sign Out
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
