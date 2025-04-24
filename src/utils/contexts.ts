import { createContext } from "react";
import { CartItem } from "./types";

const TitleSetterContext = createContext<(newTitle: string) => void>(() => {
    console.log("No setter set!");
});

const CartContext = createContext<CartItem[]>([]);

export { TitleSetterContext, CartContext };