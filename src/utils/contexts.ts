import { createContext } from "react";
import { CartItem, User } from "./types";
import { CapacitorCookies } from "@capacitor/core";

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
    // wasSynced: boolean = false;

    constructor() {

    }

    async sync(): Promise<void> {
        let cookies = await CapacitorCookies.getCookies({});

        if (cookies.hasOwnProperty("user")) {
            this.user = JSON.parse(cookies.user);

            if (cookies.hasOwnProperty("cart")) {
                this.cart = JSON.parse(cookies.cart);
            }
        };
        // this.wasSynced = true;
        // console.dir(cookies);
    }

    // @ts-ignore
    async login(email: string, password: string): Promise<void> {
        // TODO: Request from server
        this.user = {
            id: "zxcvbn",
            name: "Qwerty Uiop",
            email: email,
        };
        await CapacitorCookies.setCookie({
            key: "user",
            value: JSON.stringify(this.user),
        });
        return;
    }

    async logout(): Promise<void> {
        this.user = null;
        await CapacitorCookies.clearCookies({});
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
// await authProvider.sync();
const UserContext = createContext<AuthProvider>(authProvider);

export { TitleSetterContext, CartContext, UserContext, MenuVisiblity, AuthProvider };