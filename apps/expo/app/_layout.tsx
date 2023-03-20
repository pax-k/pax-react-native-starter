import { Provider } from 'app/src/provider'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

export default function Root() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return <SplashScreen />
  }

  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
