import { Context, createContext } from "react";

let SetPageTitleContext: Context<React.Dispatch<React.SetStateAction<string>>> = createContext((string) => { });

export default SetPageTitleContext;