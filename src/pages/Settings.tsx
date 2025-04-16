// The `/settings` page

import { IonButton } from "@ionic/react";
import { useContext, useEffect } from "react";
import LogContext from "../utils/LogContext";
import SetPageTitleContext from "../utils/PageTitleContext";

function Settings() {
    // Typical use of this hook
    const setPageHeader = useContext(SetPageTitleContext);
    useEffect(() => {
        setPageHeader("Settings");
    });
    const logger = useContext(LogContext);

    function logMsg() {
        logger("Logged message!");
    }

    return <>
        <p>
            <IonButton onClick={logMsg}>
                Log message to browser console
            </IonButton>
        </p>
    </>;
}

export default Settings;