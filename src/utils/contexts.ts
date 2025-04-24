import { createContext } from "react";

const TitleSetterContext = createContext<(newTitle: string) => void>(() => {
    console.log("No setter set!");
});

export { TitleSetterContext };