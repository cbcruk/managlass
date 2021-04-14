import { Story, Meta } from '@storybook/react'
import * as icons from 'ionicons/icons'
import Icon, { IconProps } from './Icon'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: {
        type: 'select',
      },
    },
  },
} as Meta

const Template: Story<IconProps> = ({ name, ...args }) => (
  <Icon name={icons[name]} {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'heart',
  label: 'Icon',
}
