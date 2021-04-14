import { IonRouterOutlet } from '@ionic/react'
import { Story, Meta } from '@storybook/react'
import { Route } from 'react-router'
import { View as Tabs, TabsProps } from './Tabs'

export default {
  title: 'Tabs',
  component: Tabs,
} as Meta

const Template: Story<TabsProps> = ({ isExact }) => (
  <Tabs isExact={isExact}>
    <IonRouterOutlet>
      <Route path="/" exact component={null} />
    </IonRouterOutlet>
  </Tabs>
)

export const Default = Template.bind({})
Default.args = {
  isExact: true,
}
Default.parameters = {
  controls: { hideNoControlsWarning: true },
}
