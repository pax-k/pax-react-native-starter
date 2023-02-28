import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { useLink } from 'solito/link'
import { HomeScreenUi } from './HomeScreen'

export default {
  title: 'UI/Screens/HomeScreen',
  component: HomeScreenUi,
}

const Template: ComponentStory<typeof HomeScreenUi> = (args) => {
  const linkProps = useLink({
    href: '/user/nate',
  })
  return <HomeScreenUi linkProps={linkProps} />
}

export const Primary = Template.bind({})
Primary.args = {}
