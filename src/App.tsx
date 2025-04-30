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

import { IonRouterOutlet, IonSpinner, setupIonicReact } from '@ionic/react';
import TabLayout from './components/TabLayout';
import MenuLayout from './components/MenuLayout';
import PaneLayout from './components/PaneLayout';
import { IonReactRouter } from '@ionic/react-router';

import { cart, home, peopleCircle } from 'ionicons/icons';

import HomePage from './pages/HomePage';


import { LayoutType, RouteInfo } from './utils/types';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { AuthProvider, MenuVisiblity, TitleSetterContext, UserContext } from './utils/contexts';
import { Redirect, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

setupIonicReact();

const pages: RouteInfo[] = [
  {
    route: '/home',
    title: 'Grub Go',
    label: 'Home',
    icon: home,
    page: <HomePage />,
    hasMenuItem: true,
  },
  {
    route: '/cart',
    title: 'Cart',
    label: 'Cart',
    icon: cart,
    page: <CartPage />,
    hasMenuItem: true,
  },
  {
    route: '/aboutUs',
    title: 'About Us',
    label: 'About Us',
    icon: peopleCircle,
    page: <AboutUs />,
    hasMenuItem: true,
  },
];

const FORCE_LOGIN: boolean = false;

function RouterOutlet(): ReactNode {
  let user = useContext(UserContext);

  if (!FORCE_LOGIN && user.user === null) {
    // console.log("No user");
    return (
      <IonRouterOutlet>
        <Route path="/login" render={() => <Login />} exact={true} />
        <Route path="/SignUp" render={() => <SignUp />} exact={true} />
        <Redirect to="/login" />
      </IonRouterOutlet>
    );
  }

  return (
    <IonRouterOutlet>
      <Redirect exact path="/" to="/home" />
      <Redirect exact path="/login" to="/home" />
      <Redirect exact path="/SignUp" to="/home" />

      <Route path="/home" render={() => <HomePage />} exact={true} />
      <Route path="/aboutUs" render={() => <AboutUs />} exact={true} />
      <Route path="/cart" render={() => <CartPage />} exact={true} />
      {/* <Route path="/login" render={() => <Login />} exact={true} /> */}
      {/* <Route path="/SignUp" render={() => <SignUp />} exact={true} /> */}
    </IonRouterOutlet>
  );
}

function AppContent({ title }: { title: string }) {
  const [layoutType, setLayoutType] = useState<LayoutType>("tab");
  let user = useContext(UserContext);
  let showMenu: boolean = FORCE_LOGIN || user.user !== null;

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
        <MenuVisiblity.Provider value={showMenu}>
          <TabLayout routes={pages.filter((e) => e.hasMenuItem)} isCompact={true} title={title}>
            {RouterOutlet()}
          </TabLayout>
        </MenuVisiblity.Provider>
      );
    case 'menu':
      return (
        <MenuVisiblity.Provider value={showMenu}>
          <MenuLayout routes={pages.filter((e) => e.hasMenuItem)} isCompact={true} title={title}>
            <RouterOutlet />
          </MenuLayout>
        </MenuVisiblity.Provider>
      );
    case 'compactPane':
      return (
        <MenuVisiblity.Provider value={showMenu}>
          <PaneLayout routes={pages.filter((e) => e.hasMenuItem)} isCompact={true} title={title}>
            <RouterOutlet />
          </PaneLayout>
        </MenuVisiblity.Provider>
      );
    case 'expandedPane':
      return (
        <MenuVisiblity.Provider value={showMenu}>
          <PaneLayout routes={pages.filter((e) => e.hasMenuItem)} isCompact={false} title={title}>
            <RouterOutlet />
          </PaneLayout>
        </MenuVisiblity.Provider>
      );
    default:
      return (
        <MenuVisiblity.Provider value={showMenu}>
          <TabLayout routes={pages} isCompact={true} title={title}>
            <RouterOutlet />
          </TabLayout>
        </MenuVisiblity.Provider>
      );
  }
}

const authProvider = new AuthProvider();

function App() {
  const [title, setTitle] = useState<string>("Food Delivery");

  function setAppTitle(newTitle: string) {
    document.title = newTitle;
    setTitle(newTitle);
  }

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    authProvider.sync().then(() => {
      setIsLoading(false);
    });
  });

  if (isLoading) {
    return <IonSpinner></IonSpinner>
  }

  return (
    <TitleSetterContext.Provider value={setAppTitle}>
      <UserContext.Provider value={authProvider}>
        <IonReactRouter>
          <AppContent title={title} />
        </IonReactRouter>
      </UserContext.Provider>
    </TitleSetterContext.Provider>
  );
}

export default App;
