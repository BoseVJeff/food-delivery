import { IonContent } from '@ionic/react';
import { useContext } from 'react';
import { TitleSetterContext } from '../utils/contexts';

const SearchPage = () => {
    const titleSetter = useContext(TitleSetterContext);

    titleSetter("Search");

    return (
        <>
            {/* <IonTitle>Search</IonTitle> */}
            <IonContent>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    Search content
                </div>
            </IonContent>
        </>
    );
};

export default SearchPage;