import { TamaguiProviderProps } from 'ui/src'
import { Provider as TamaguiProvider } from './tamagui-provider'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return <TamaguiProvider {...rest}>{children}</TamaguiProvider>
}
