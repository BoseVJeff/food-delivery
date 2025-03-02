// The `/settings` page

import { IonButton } from "@ionic/react";
import ThemeContext from "../utils/ThemeContext";
import { useContext, useRef, useState } from "react";
import LogContext from "../utils/LogContext";

function Settings() {
    const logger = useContext(LogContext);

    function logMsg() {
        logger("Logged message!");
    }

    let [theme, setTheme] = useState<boolean | null>(null);

    const root = useRef(document.documentElement);

    function switchTheme() {
        setTheme(theme === null ? true : !theme);
        if (!theme) {
            root.current.classList.add("ion-palette-dark");
        } else {
            root.current.classList.remove("ion-palette-dark");
        }
        logger(`Current theme: ${theme}`);
    }

    return <ThemeContext.Provider value={theme}>

        <p>
            <IonButton onClick={switchTheme}>
                {/* Default should be light, hence the structure */}
                Enable {!theme ? "Dark" : "Light"} Mode
            </IonButton>
        </p>

        <p>
            <IonButton onClick={logMsg}>
                Log message to browser console
            </IonButton>
        </p>
    </ThemeContext.Provider>;
}

export default Settings;