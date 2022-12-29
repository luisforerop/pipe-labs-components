import { Button } from '../../components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Simple components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select' },
    isFullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    className: { control: 'text' },
    loadingMessage: { control: 'text' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const WithText = Template.bind({})
WithText.args = {
  children: 'Next',
  isFullWidth: true,
  isDisabled: false,
  isLoading: true,
  onClick: () => alert('Hi, this is the next action!'),
}

export const WithComponent = Template.bind({})
WithComponent.args = {
  children: <div>Buy now!</div>,
  variant: 'primary',
}
