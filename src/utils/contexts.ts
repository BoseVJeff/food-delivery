import { createContext } from "react";
import { CartItem, User } from "./types";

const TitleSetterContext = createContext<(newTitle: string) => void>(() => {
    console.log("No setter set!");
});

const CartContext = createContext<CartItem[]>([]);

/**
 * Set to true if menu is to be shown.
 */
const MenuVisiblity = createContext<boolean>(true);

class AuthProvider {
    user: User | null = null;
    cart: CartItem[] = [];

    constructor() {
        // this.navigate=useNav
    }

    // @ts-ignore
    async login(username: string, password: string): Promise<void> {
        // TODO: Request from server
        this.user = {
            id: "",
            name: username,
        };
        return;
    }

    logout(): void {
        this.user = null;
        return;
    }

    async getCart(): Promise<void> {
        // TODO: Get data from server
        this.cart = [];
        return;
    }

    async addToCart(item: CartItem) {
        this.cart.push(item);
        // TODO: Push data to server
    }

}

const authProvider = new AuthProvider();
const UserContext = createContext<AuthProvider>(authProvider);

export { TitleSetterContext, CartContext, UserContext, MenuVisiblity, AuthProvider };