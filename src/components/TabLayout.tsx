import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/react';

import { useLocation } from 'react-router';

import { LayoutArgs } from '../utils/types';
import { CartContext } from '../utils/contexts';
import { useContext } from 'react';
import { cart, cartOutline } from 'ionicons/icons';

function TabLayout({ routes, title, children }: LayoutArgs) {
    let cartItems = useContext(CartContext);

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
                        <IonButton slot='end' fill='clear' color='medium' shape='round'>
                            <IonIcon icon={cartItems.length === 0 ? cartOutline : cart}></IonIcon>
                            {/* <IonBadge color="danger" slot='end'>{cartItems.length}</IonBadge> */}
                        </IonButton>
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