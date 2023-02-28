import { styled, Button } from 'tamagui'

export interface MyButtonProps {
  children: string
}

const StyledButton = styled(Button, {
  name: 'MyButton', // useful for debugging, and Component themes
  borderRadius: 10,
})

export function MyButton({ children }: MyButtonProps) {
  return <StyledButton width="30%">{children}</StyledButton>
}
