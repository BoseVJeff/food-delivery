import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import { useLocation } from 'react-router';

import { LayoutArgs } from '../utils/types';

function TabLayout({ routes, title, children }: LayoutArgs) {
    let currentRoute = useLocation().pathname;

    let ionTabs = routes.map((e) => {
        let isCurrent = currentRoute == e.route;
        return <IonTabButton tab={e.label} href={e.route}>
            <IonIcon icon={e.icon} color={isCurrent ? "primary" : undefined}></IonIcon>
            <IonLabel color={isCurrent ? "primary" : undefined}>{e.label ?? e.title}</IonLabel>
        </IonTabButton>;
    });

    return (
        <>
            <IonTabs>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {children}
                {/* <IonRouterOutlet>
                    {routerRedirects}
                    {routerRoutes}
                </IonRouterOutlet> */}

                <IonTabBar slot="bottom">
                    {ionTabs}
                </IonTabBar>
            </IonTabs>
        </>
    );
}
export default TabLayout;