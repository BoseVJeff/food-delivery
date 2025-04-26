import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { cartOutline, logInOutline } from "ionicons/icons";

import { LayoutArgs } from "../utils/types";
import { useLocation } from "react-router";

import "./../assets/react.svg";

import "./PaneLayout.css";

function PaneLayout({ routes, isCompact, title, children }: LayoutArgs) {
  let currentRoute = useLocation().pathname;
  let menuItems = routes.map((e) => {
    let isCurrent = currentRoute == e.route;
    return (
      <IonItem routerLink={e.route} key={e.label ?? e.title}>
        <IonIcon
          slot="start"
          icon={e.icon}
          aria-hidden="true"
          color={isCurrent ? "danger" : "medium"}
        ></IonIcon>
        <IonLabel color={isCurrent ? "danger" : undefined}>{e.label}</IonLabel>
      </IonItem>
    );
  });

  let compactMenuItems = routes.map((e) => {
    let isCurrent = currentRoute == e.route;
    return (
      <IonItem routerLink={e.route} key={e.label ?? e.title}>
        <IonIcon
          icon={e.icon}
          aria-hidden="true"
          color={isCurrent ? "primary" : "medium"}
        />
      </IonItem>
    );
  });

  return (
    <IonSplitPane
      when="xs"
      contentId="main-content"
      className={isCompact ? "compact" : "expanded"}
    >
      <IonMenu contentId="main-content">
        {/* <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Menu Header
                        </IonTitle>
                    </IonToolbar>
                </IonHeader> */}
        {/* <IonContent> */}
        <IonList lines="none">
          <IonListHeader>
            {/* <IonLabel> */}
            {/* Menu Header */}
            {/* <IonIcon icon={menu}></IonIcon> */}
            {/* </IonLabel> */}
          </IonListHeader>
          {isCompact ? compactMenuItems : menuItems}
          <div className="flex p-2 pl-4 hover:bg-[#f5f5f5] cursor-pointer " id="present-alert">
            <IonIcon icon={logInOutline} slot="start" className="text-2xl" />
            <IonLabel
              
              className="bg-none text-left cursor-pointer"
            >
              Log Out
            </IonLabel>
          </div>
          <IonAlert
            header="Are you sure you want to log out?"
            trigger="present-alert"
            buttons={[
              {
                text: "NO",
                role: "cancel",
                handler: () => {
                  console.log("Alert canceled");
                },
              },
              {
                text: "Yes",
                role: "confirm",
                handler: () => {
                  console.log("Alert confirmed");
                },
              },
            ]}
            onDidDismiss={({ detail }) =>
              console.log(`Dismissed with role: ${detail.role}`)
            }
          ></IonAlert>
        </IonList>

        {/* </IonContent> */}
      </IonMenu>

      <div className="ion-page" id="main-content">
        <IonHeader className="!shadow-none [--box-shadow:none]">
          <IonToolbar className="shadow-sm backdrop-blur-2xl">
            <IonTitle className="font-inter">{title}</IonTitle>

            <IonButton
              routerLink="/cart"
              className="pr-8"
              color={"danger"}
              slot="end"
            >
              <IonIcon icon={cartOutline}></IonIcon>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {children}
          {/* <IonRouterOutlet>
                        {routerRedirects}
                        {routerRoutes}
                    </IonRouterOutlet> */}
        </IonContent>
      </div>
    </IonSplitPane>
  );
}

export default PaneLayout;
