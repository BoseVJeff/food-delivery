import { IonContent } from '@ionic/react';
import { useContext } from 'react';
import { TitleSetterContext } from '../utils/contexts';

const HomePage = () => {
    const titleSetter = useContext(TitleSetterContext);

    titleSetter("Listen Now");

    return (
        <>
            {/* <IonTitle>Listen now</IonTitle> */}
            <IonContent>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    Listen now content
                </div>
            </IonContent>
        </>
    );
};

export default HomePage;