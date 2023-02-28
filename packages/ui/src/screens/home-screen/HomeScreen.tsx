import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink as _useLink } from 'solito/link'
import { Anchor, Button, H1, Paragraph, Separator, Sheet, XStack, YStack } from 'tamagui'
import { MyButton } from '../../components/my-button/MyButton'

export interface HomeScreenProps {
  linkProps?: ReturnType<typeof _useLink>
}

export function HomeScreenUi({ linkProps }: HomeScreenProps) {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" padding="$4" space>
      <YStack space="$4" maxWidth={600}>
        <H1 textAlign="center">Welcome to your app</H1>
        <H1 textAlign="center">Some UI Change</H1>
        <MyButton>Some text</MyButton>
        <Paragraph textAlign="center">Here s another text</Paragraph>
        <Separator />
        <Paragraph textAlign="center">⭐️</Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>
      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  return (
    <>
      <Button size="$6" icon={open ? ChevronDown : ChevronUp} circular onPress={() => setOpen((x) => !x)} />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame alignItems="center" justifyContent="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
