import { Story, Meta } from '@storybook/react'
import { SignInProps, View as SignIn } from './SignIn'

export default {
  title: 'SignIn',
  component: SignIn,
} as Meta

const Template: Story<SignInProps> = (args) => <SignIn {...args} />

export const Default = Template.bind({})
Default.parameters = {
  controls: { hideNoControlsWarning: true },
  actions: { argTypesRegex: '^on.*' },
}
