import { IonContent } from '@ionic/react';
import { useContext } from 'react';
import { TitleSetterContext } from '../utils/contexts';

const RadioPage = () => {
    const titleSetter = useContext(TitleSetterContext);

    titleSetter("Radio");

    return (
        <>
            {/* <IonTitle>Radio</IonTitle> */}
            <IonContent>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    Radio content
                </div>
            </IonContent>
        </>
    );
};

export default RadioPage;