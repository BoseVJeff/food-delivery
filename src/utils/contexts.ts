import { createContext } from "react";
import { CartItem, FoodItem, User } from "./types";
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
    menu: FoodItem[] = [];
    // wasSynced: boolean = false;

    constructor() {

    }

    async sync(): Promise<void> {
        let cookies = await CapacitorCookies.getCookies({});

        if (cookies.hasOwnProperty("user")) {
            this.user = JSON.parse(cookies.user);
        };
        // this.wasSynced = true;
        // console.dir(cookies);
    }

    async getMenu(): Promise<void> {
        // TODO: Get data from server
        this.menu = [
            {
                id: "1",
                name: "Chora Masala",
                description: "Chora with Masala",
                price: 50,
                isSpecial: false,
                image: "https://ionicframework.com/docs/img/demos/card-media.png"
            },
        ];
        return;
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
        let cookies = await CapacitorCookies.getCookies({});
        if (cookies.hasOwnProperty("cart")) {
            this.cart = JSON.parse(cookies.cart);
        } else {
            // TODO: Get data from server
            this.cart = [
                {
                    id: "0",
                    name: "Lunch",
                    description: "Aloo sabji, 2x roti, rice, daal chawal",
                    price: 80,
                    quantity: 1,
                    image: ""
                },
                {
                    id: "1",
                    name: "Aloo Paratha",
                    description: "Aloo Paratha",
                    price: 40,
                    quantity: 1,
                    image: ""
                },
            ];
        }
        return;
    }

    async addToCart(item: CartItem) {
        this.cart.push(item);
        // TODO: Push data to server
    }

    async saveCart(cart: CartItem[]): Promise<void> {
        this.cart = cart;
        await CapacitorCookies.setCookie({
            key: "cart",
            value: JSON.stringify(this.cart),
        });
        // TODO: Sync items to server
        return;
    }

}

const authProvider = new AuthProvider();
// await authProvider.sync();
const UserContext = createContext<AuthProvider>(authProvider);

export { TitleSetterContext, CartContext, UserContext, MenuVisiblity, AuthProvider };