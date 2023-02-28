import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { MyButton } from './MyButton'

export default {
  title: 'UI/Components/MyButton',
  component: MyButton,
}

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args}>My Button</MyButton>

export const Primary = Template.bind({})
Primary.args = {}
