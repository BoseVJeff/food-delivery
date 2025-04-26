import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useLocation } from "react-router-dom";

import { LayoutArgs } from '../utils/types';
import { cartOutline, cart } from 'ionicons/icons';
import { CartContext } from '../utils/contexts';
import { useContext } from 'react';

function MenuLayout({ routes, title, children }: LayoutArgs) {
    let cartItems = useContext(CartContext);

    // let currentRoute = window.location.pathname;
    let currentRoute = useLocation().pathname;
    let menuItems = routes.map((e) => {
        let isCurrent = currentRoute == e.route;
        return <IonMenuToggle><IonItem routerLink={e.route} key={e.label}>
            <IonIcon slot='start' icon={e.icon} aria-hidden="true" color={isCurrent ? "primary" : undefined}></IonIcon>
            <IonLabel color={isCurrent ? "primary" : undefined}>
                {e.label}
            </IonLabel>
        </IonItem>
        </IonMenuToggle>;
    }
    );

    return (
        <>
            <IonMenu contentId="main-content" className=' bg-[#f8f8f8]'>
                <IonList lines='none'>
                    <IonListHeader>
                        <IonLabel>
                            GrubGo
                        </IonLabel>
                    </IonListHeader>
                    <IonLabel>asdad</IonLabel>
                    {menuItems}
                    
                </IonList>
            </IonMenu>
            <IonPage id="main-content" >
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>{title}</IonTitle>
                        <IonButton slot='end' fill='clear' color='medium' shape='round'>
                            <IonIcon icon={cartItems.length === 0 ? cartOutline : cart}></IonIcon>
                            {/* <IonBadge color="danger" slot='end'>{cartItems.length}</IonBadge> */}
                        </IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {children}
                    {/* <IonRouterOutlet>
                        {routerRedirects}
                        {routerRoutes}
                    </IonRouterOutlet> */}
                </IonContent>
            </IonPage>
        </>
    );
}

export default MenuLayout;