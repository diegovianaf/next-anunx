import * as React from 'react'
import PropTypes from 'prop-types'
import { SessionProvider } from 'next-auth/react'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Head from 'next/head'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'
import { ToastyProvider } from '../src/contexts/Toasty'
import CheckAuth from '../src/components/CheckAuth'

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps }
  } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Anunx</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <ToastyProvider>
            <CssBaseline />
            {
              Component.requireAuth
                ? <CheckAuth Component={Component} pageProps={pageProps} />
                : <Component {...pageProps} />
            }
          </ToastyProvider>
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
