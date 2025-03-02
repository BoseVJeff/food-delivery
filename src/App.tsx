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

import { IonHeader, IonToolbar, IonTitle, IonContent, setupIonicReact, IonFooter, IonApp, IonButton } from '@ionic/react';
import { useContext, useRef, useState } from 'react';
import ThemeContext from './utils/ThemeContext';
import LogContext from './utils/LogContext';

setupIonicReact();

function App() {
  // const theme = useContext(ThemeContext);

  let [theme, setTheme] = useState<boolean | null>(null);

  const root = useRef(document.documentElement);

  const logger = useContext(LogContext);

  function switchTheme() {
    setTheme(theme === null ? true : !theme);
    if (!theme) {
      root.current.classList.add("ion-palette-dark");
    } else {
      root.current.classList.remove("ion-palette-dark");
    }
    logger(`Current theme: ${theme}`);
  }

  function logMsg() {
    logger("Logged message!");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Header</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>

          <p>Here's a small text description for the content. Nothing more, nothing less.</p>

          <p>
            <IonButton onClick={switchTheme}>
              {/* Default should be light, hence the structure */}
              Enable {!theme ? "Dark" : "Light"} Mode
            </IonButton>
          </p>

          <p>
            <IonButton onClick={logMsg}>
              Log message to browser console
            </IonButton>
          </p>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonTitle>Footer</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonApp>
    </ThemeContext.Provider>
  );
}

export default App
