// "use strict";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.class.css';

import './theme/variables.css';

import { IonHeader, IonToolbar, IonTitle, IonContent, setupIonicReact, IonFooter, IonApp, IonRouterOutlet, IonMenu, IonButtons, IonMenuButton, IonList, IonItem, IonListHeader } from '@ionic/react';
import Home from './pages/Home';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Settings from './pages/Settings';
import Example from './pages/Example';
import Default from './pages/Default';
import { useContext, useState } from 'react';
import SetPageTitleContext from './utils/PageTitleContext';

setupIonicReact();

function App() {
  let base_url = import.meta.env.BASE_URL;
  let current_url = document.URL;
  let url = new URL(base_url, current_url);

  let basename = "/";
  if (url.hostname.endsWith(".github.io")) {
    basename = url.pathname;
  }

  const [pageTitle, setPageTitle] = useState<string>("");

  return (
    <>
      <IonReactRouter basename={basename}>
        <IonMenu contentId='fd-app'>
          <IonList>
            <IonListHeader>
              Food Delivery
            </IonListHeader>
            <IonItem routerLink='/'>
              Home
            </IonItem>
            <IonItem routerLink='/settings'>
              Settings
            </IonItem>
            <IonItem routerLink='/example'>
              Example
            </IonItem>
          </IonList>
        </IonMenu>
        <IonApp>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{pageTitle}</IonTitle>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent class='ion-padding' id='fd-app'>
            <SetPageTitleContext.Provider value={setPageTitle}>
              <IonRouterOutlet>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home">
                  <Redirect to="/"></Redirect>
                </Route>
                <Route path="/settings" component={Settings}></Route>
                <Route path="/example" component={Example}></Route>
                <Route component={Default}></Route>
              </IonRouterOutlet>
            </SetPageTitleContext.Provider>
          </IonContent>
          <IonFooter>
            <IonToolbar>
              <IonTitle>Footer</IonTitle>
            </IonToolbar>
          </IonFooter>
        </IonApp>
      </IonReactRouter>
    </>
  );
}

export default App;
