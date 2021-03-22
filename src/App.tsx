import { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupConfig } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Comic, Scrap, Update, Work } from './pages'
import Spinner from './components/shared/Spinner'
import Tabs from './components/shared/Tabs'
import withProtected from './components/shared/Protected/withProtected'
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

setupConfig({
  spinner: 'crescent',
})

function App() {
  return (
    <IonApp data-testid="App">
      <IonReactRouter>
        <Suspense fallback={<Spinner />}>
          <Tabs>
            <IonRouterOutlet>
              <Route path="/update" exact component={Update} />
              <Route path="/scrap" exact component={withProtected(Scrap)} />
              <Route path="/comic/:id" component={withProtected(Comic)} />
              <Route path="/work/:id" component={Work} />
              <Redirect exact from="/" to="/update" />
            </IonRouterOutlet>
          </Tabs>
        </Suspense>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
