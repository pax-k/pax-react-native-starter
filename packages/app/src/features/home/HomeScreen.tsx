import { HomeScreenUi } from 'ui/src/screens/home-screen/HomeScreen'
import React from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/paxx',
  })

  return <HomeScreenUi linkProps={linkProps} />
}
