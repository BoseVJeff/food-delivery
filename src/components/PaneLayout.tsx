import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';

import { cartOutline } from 'ionicons/icons';

import { LayoutArgs } from '../utils/types';
import { useLocation } from 'react-router';

import "./../assets/react.svg";

import "./PaneLayout.css";

function PaneLayout({ routes, isCompact, title, children }: LayoutArgs) {
    let currentRoute = useLocation().pathname;
    let menuItems = routes.map((e) => {
        let isCurrent = currentRoute == e.route;
        return <IonItem routerLink={e.route} key={e.label ?? e.title}>
            <IonIcon slot='start' icon={e.icon} aria-hidden="true" color={isCurrent ? "primary" : "medium"}></IonIcon>
            <IonLabel color={isCurrent ? "primary" : undefined}>
                {e.label}
            </IonLabel>
        </IonItem>;
    }
    );

    let compactMenuItems = routes.map((e) => {
        let isCurrent = currentRoute == e.route;
        return <IonItem routerLink={e.route} key={e.label ?? e.title}>
            <IonIcon icon={e.icon} aria-hidden="true" color={isCurrent ? "primary" : "medium"} />
        </IonItem>;
    }
    );

    return (
        <IonSplitPane when="xs" contentId="main-content" className={isCompact ? "compact" : "expanded"}>
            <IonMenu contentId="main-content">
                {/* <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Menu Header
                        </IonTitle>
                    </IonToolbar>
                </IonHeader> */}
                {/* <IonContent> */}
                <IonList lines='none'>
                    <IonListHeader>
                        {/* <IonLabel> */}
                        {/* Menu Header */}
                        {/* <IonIcon icon={menu}></IonIcon> */}
                        {/* </IonLabel> */}
                    </IonListHeader>
                    {isCompact ? compactMenuItems : menuItems}
                </IonList>
                {/* </IonContent> */}
            </IonMenu>

            <div className="ion-page" id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{title}</IonTitle>
                        <IonButton slot='end' fill='clear' color='medium' shape='round'>
                            <IonIcon icon={cartOutline}></IonIcon>
                            {/* <IonBadge color="danger" slot='end'>5</IonBadge> */}
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