import 'expo-dev-client'
import { NativeNavigation } from 'app/src/navigation/native'
import { Provider } from 'app/src/provider'
import { useThemeState } from 'app/src/state/themeState'
import { useFonts } from 'expo-font'
import React from 'react'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const { name } = useThemeState()

  if (!loaded) {
    return null
  }

  return (
    <Provider defaultTheme={name}>
      <NativeNavigation />
    </Provider>
  )
}
