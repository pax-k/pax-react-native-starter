import { TamaguiProviderProps } from 'ui/src'
import { NavigationProvider } from './navigation'
import { Provider as TamaguiProvider } from './tamagui-provider'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider {...rest}>
      <NavigationProvider>{children}</NavigationProvider>
    </TamaguiProvider>
  )
}
