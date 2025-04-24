import { IonContent } from '@ionic/react';
import { useContext } from 'react';
import { TitleSetterContext } from '../utils/contexts';

const HomePage = () => {
    const titleSetter = useContext(TitleSetterContext);

    titleSetter("Cart");

    return (
        <>
            <IonContent>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    Cart
                </div>
            </IonContent>
        </>
    );
};

export default HomePage;