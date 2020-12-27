import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { SWRConfig } from 'swr'
import { Comic, Update } from './pages'
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import './theme/variables.css'

function App() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
      }}
    >
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/update" component={Update} />
            <Route path="/comic/:id" component={Comic} />
            <Redirect exact from="/" to="/update" />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </SWRConfig>
  )
}

export default App
