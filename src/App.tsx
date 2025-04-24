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

import './App.css'

import { IonRouterOutlet, setupIonicReact } from '@ionic/react';
import TabLayout from './components/TabLayout';
import MenuLayout from './components/MenuLayout';
import PaneLayout from './components/PaneLayout';
import { IonReactRouter } from '@ionic/react-router';

import { playCircle, radio, library, search } from 'ionicons/icons';

import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import RadioPage from './pages/RadioPage';
import SearchPage from './pages/SearchPage';

import { LayoutType, RouteInfo } from './utils/types';
import { ReactNode, useEffect, useState } from 'react';
import { TitleSetterContext } from './utils/contexts';
import { Redirect, Route } from 'react-router-dom';

setupIonicReact();

const pages: RouteInfo[] = [
  {
    route: '/home',
    title: 'Listen Now',
    label: 'Listen',
    icon: playCircle,
    page: <HomePage />
  },
  {
    route: '/radio',
    title: 'Radio',
    label: 'Radio',
    icon: radio,
    page: <RadioPage />
  },
  {
    route: '/library',
    title: 'Library',
    label: 'Library',
    icon: library,
    page: <LibraryPage />
  },
  {
    route: '/search',
    title: 'Search',
    label: 'Search',
    icon: search,
    page: <SearchPage />
  },
];

function RouterOutlet(): ReactNode {
  return (
    <IonRouterOutlet>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />

        <Route path="/home" render={() => <HomePage />} exact={true} />
        <Route path="/radio" render={() => <RadioPage />} exact={true} />
        <Route path="/library" render={() => <LibraryPage />} exact={true} />
        <Route path="/search" render={() => <SearchPage />} exact={true} />
      </IonRouterOutlet>
    </IonRouterOutlet>
  );
}

function AppContent({ title }: { title: string }) {
  const [layoutType, setLayoutType] = useState<LayoutType>("tab");

  const ro = new ResizeObserver((_) => {
    let bodyWidth = window.innerWidth;
    // Breakpoints from https://m3.material.io/foundations/layout/applying-layout/window-size-classes
    if (bodyWidth < 600) {
      setLayoutType("tab");
    } else if (bodyWidth < 840) {
      setLayoutType("menu");
    } else if (bodyWidth < 1200) {
      setLayoutType("compactPane");
    } else {
      setLayoutType("expandedPane");
    }
  });

  useEffect(() => {
    ro.observe(document.body);

    return () => {
      ro.unobserve(document.body);
    };
  });

  switch (layoutType) {
    case 'tab':
      return (
        <TabLayout routes={pages} isCompact={true} title={title}>
          {RouterOutlet()}
        </TabLayout>
      );
    case 'menu':
      return (
        <MenuLayout routes={pages} isCompact={true} title={title}>
          <RouterOutlet />
        </MenuLayout>
      );
    case 'compactPane':
      return (
        <PaneLayout routes={pages} isCompact={true} title={title}>
          <RouterOutlet />
        </PaneLayout>
      );
    case 'expandedPane':
      return (
        <PaneLayout routes={pages} isCompact={false} title={title}>
          <RouterOutlet />
        </PaneLayout>
      );
    default:
      return (
        <TabLayout routes={pages} isCompact={true} title={title}>
          <RouterOutlet />
        </TabLayout>
      );
  }
}

function App() {
  const [title, setTitle] = useState<string>("Food Delivery");

  function setAppTitle(newTitle: string) {
    document.title = newTitle;
    setTitle(newTitle);
  }

  return (
    <TitleSetterContext.Provider value={setAppTitle}>
      <IonReactRouter>
        <AppContent title={title} />
      </IonReactRouter>
    </TitleSetterContext.Provider>
  );
}

export default App
