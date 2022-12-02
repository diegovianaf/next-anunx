import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession  } from 'next-auth/react'

const CheckAuth = ({ Component, pageProps }) => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/auth/signin')
    }
  }, [session, status])

  if (session) {
    return <Component {...pageProps} />
  }

  return 'Loading...'
}

export default CheckAuth
