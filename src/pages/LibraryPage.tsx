import { IonContent } from '@ionic/react';
import { useContext } from 'react';
import { TitleSetterContext } from '../utils/contexts';

const LibraryPage = () => {
    const titleSetter = useContext(TitleSetterContext);

    titleSetter("Library");

    return (
        <>
            {/* <IonTitle>Library</IonTitle> */}
            <IonContent>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    Library content
                </div>
            </IonContent>
        </>
    );
};

export default LibraryPage;