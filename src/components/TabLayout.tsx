import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

import { useLocation } from "react-router";

import { LayoutArgs } from "../utils/types";
import { MenuVisiblity, UserContext } from "../utils/contexts";
import { ReactNode, useContext } from "react";

function TabLayout({ routes, title, children }: LayoutArgs) {
  // let cartItems = useContext(CartContext);
  let user = useContext(UserContext);
  // @ts-ignore
  let cartItems = user.cart;

  let isMenuVisible = useContext(MenuVisiblity);

  let currentRoute = useLocation().pathname;

  let ionTabs: ReactNode[] = routes.map((e) => {
    let isCurrent = currentRoute == e.route;
    return (
      <IonTabButton tab={e.label} href={e.route}>
        <IonIcon
          icon={e.icon}
          color={isCurrent ? "danger" : undefined}
        ></IonIcon>
        <IonLabel color={isCurrent ? "danger" : undefined}>
          {e.label ?? e.title}
        </IonLabel>
      </IonTabButton>
    );
  });

  return (
    <>
      <IonTabs>
        <IonHeader className="!shadow-none [--box-shadow:none]">
          <IonToolbar className="shadow-sm backdrop-blur-2xl">
            <IonTitle>{title}</IonTitle>
            {/* <IonButton
              routerLink="/cart"
              className="pr-8"
              color={"danger"}
              slot="end"
            > */}
            {/* <IonIcon
                icon={cartItems.length === 0 ? cartOutline : cart}
              ></IonIcon> */}
            {/* <IonBadge color="danger" slot='end'>{cartItems.length}</IonBadge> */}
            {/* </IonButton> */}
          </IonToolbar>
        </IonHeader>
        {children}
        {/* <IonRouterOutlet>
                    {routerRedirects}
                    {routerRoutes}
                </IonRouterOutlet> */}

        {!isMenuVisible ? null : <IonTabBar slot="bottom">
          {ionTabs}
          {/* <IonTabButton>

          <div
            className="flex justify-center flex-col items-center p-2 pl-4 hover:bg-[#f5f5f5] cursor-pointer "
            id="present-alert"
          >
            <IonIcon icon={logInOutline} slot="start" className="text-2xl" />
            <IonLabel className="bg-none cursor-pointer">Log Out</IonLabel>
          </div>
        </IonTabButton> */}
        </IonTabBar>}
      </IonTabs>
    </>
  );
}
export default TabLayout;
