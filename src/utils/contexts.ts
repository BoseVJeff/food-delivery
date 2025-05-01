import { createContext } from "react";
import { CartItem, FoodItem, User } from "./types";
import { CapacitorCookies } from "@capacitor/core";

// const SERVER = "http://localhost:5000";

// TODO: Get rid of this once everything is done
let users: (User & { password: string })[] = [
    {
        id: "0",
        name: "Anurag",
        email: "anurag.vish@gmail.com",
        password: "anuragv",
    },
    {
        id: "1",
        name: "Tanish",
        email: "tanish@gmail.com",
        password: "tanish",
    },
    {
        id: "2",
        name: "Vineet Maurya",
        email: "vm@gmail.com",
        password: "vm",
    },
];

const fullMenu: FoodItem[] = [

    {
        "id": "burger-001",
        "name": "Classic Cheeseburger",
        "description": "Quarter-pound beef patty with American cheese, lettuce, tomato, and pickle on a brioche bun.",
        "price": 70,
        "isSpecial": true,
        "image": "https://www.recipstory.com/wp-content/uploads/2024/10/Classic-Cheeseburger.jpg",
    },
    {
        "id": "pizza-001",
        "name": "Cheese Pizza Slice",
        "description": "Hand-tossed crust topped with marinara sauce and a blend of mozzarella and provolone cheeses.",
        "price": 40,
        "isSpecial": true,
        "image": "https://slicelife.imgix.net/11269/photos/original/TheSlicePizza_CheesePizza.jpg",
    },
    {
        "id": "wrap-001",
        "name": "Chicken Caesar Wrap",
        "description": "Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing wrapped in a flour tortilla.",
        "price": 80,
        "isSpecial": false,
        "image": "https://www.diaryofarecipecollector.com/wp-content/uploads/2017/06/chicken-caesar-wrap-square.jpg",
    },
    {
        "id": "pasta-001",
        "name": "Spaghetti and Meatballs",
        "description": "Pasta topped with house-made marinara sauce and beef meatballs, served with garlic bread.",
        "price": 90,
        "isSpecial": false,
        "image": "https://www.kitchensanctuary.com/wp-content/uploads/2016/02/One-Pan-Spaghetti-and-Meatballs-Square-FS-38.jpg",
    },
    {
        "id": "salad-001",
        "name": "Garden Salad",
        "description": "Mixed greens with cucumber, cherry tomatoes, shredded carrots, and choice of dressing.",
        "price": 60,
        "isSpecial": false,
        "image": "https://natashaskitchen.com/wp-content/uploads/2023/02/House-Garden-Salad-SQ.jpg",
    },
    {
        "id": "sandwich-001",
        "name": "Turkey Club Sandwich",
        "description": "Sliced turkey breast with bacon, lettuce, tomato, and mayo on toasted wheat bread.",
        "price": 70,
        "isSpecial": false,
        "image": "https://bigoven-res.cloudinary.com/image/upload/v1584247522/turkey-club-sandwich-efb301.jpg",
    },
    {
        "id": "breakfast-001",
        "name": "Breakfast Burrito",
        "description": "Scrambled eggs, cheddar cheese, breakfast potatoes, and choice of bacon or sausage in a flour tortilla.",
        "price": 60,
        "isSpecial": true,
        "image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2023/02/breakfast-burrito-recipe-16.jpg?w=1200&ssl=1",
    },
    {
        "id": "fries-001",
        "name": "French Fries",
        "description": "Crispy golden fries seasoned with salt.",
        "price": 30,
        "isSpecial": false,
        "image": "https://www.recipetineats.com/tachyon/2022/09/Crispy-Fries_8.jpg",
    },
    {
        "id": "bowl-001",
        "name": "Quinoa Power Bowl",
        "description": "Quinoa with roasted vegetables, chickpeas, and tahini dressing.",
        "price": 80,
        "isSpecial": false,
        "image": "https://choosingchia.com/jessh-jessh/uploads/2020/03/Quinoa-power-bowls-2.jpg",
    },
    {
        "id": "soup-001",
        "name": "Tomato Basil Soup",
        "description": "Creamy tomato soup with fresh basil and a hint of cream, served with a dinner roll.",
        "price": 50,
        "isSpecial": false,
        "image": "https://www.savvymamalifestyle.com/wp-content/uploads/2020/10/Tomato-Soup.jpg",
    },
    {
        "id": "stir-fry-001",
        "name": "Vegetable Stir Fry",
        "description": "Assorted vegetables stir-fried with your choice of protein and served over rice or noodles.",
        "price": 90,
        "isSpecial": false,
        "image": "https://joyfoodsunshine.com/wp-content/uploads/2021/05/stir-fry-vegetables-recipe-5.jpg",
    },
    {
        "id": "mac-001",
        "name": "Mac and Cheese",
        "description": "Elbow pasta in a creamy blend of cheddar and American cheeses.",
        "price": 60,
        "isSpecial": true,
        "image": "https://www.thepkpway.com/wp-content/uploads/2017/03/creamy-macaroni-and-cheese-4f.jpg",
    },
    {
        "id": "dessert-001",
        "name": "Chocolate Chip Cookie",
        "description": "Freshly baked cookie with semi-sweet chocolate chips.",
        "price": 20,
        "isSpecial": false,
        "image": "https://www.browneyedbaker.com/wp-content/uploads/2017/09/soft-chewy-chocolate-chip-cookies-7-754.jpg",
    },
    {
        "id": "drink-001",
        "name": "Fountain Drink",
        "description": "16oz fountain beverage with free refills.",
        "price": 20,
        "isSpecial": false,
        "image": "https://southpark.garlicknotpizza.com/wp-content/uploads/sites/15/2020/08/grid-fountain-drinks2.png",
    },
    {
        "id": "special-001",
        "name": "Daily Chef's Special",
        "description": "Rotating entrée prepared fresh daily by our culinary team.",
        "price": 100,
        "isSpecial": true,
        "image": "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/vmbwklef/e8e5ad03-4bbf-4462-a6dd-fb5aed2e7bda.jpg",
    }
];

let baseCarts: { user: string, items: CartItem[] }[] = [
    {
        user: "2",
        items: [
            {
                "id": "burger-001",
                "name": "Classic Cheeseburger",
                "description": "Quarter-pound beef patty with American cheese, lettuce, tomato, and pickle on a brioche bun.",
                "price": 70,
                quantity: 2,
                "image": "https://www.recipstory.com/wp-content/uploads/2024/10/Classic-Cheeseburger.jpg",
            },
        ]
    },
];

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

    // Get cached credentials
    async sync(): Promise<void> {
        let cookies = await CapacitorCookies.getCookies({});

        // Get all menu items
        await this.getMenu();

        // Restore user session from local storage if possible
        if (cookies.hasOwnProperty("user")) {
            this.user = JSON.parse(cookies.user);
        }
        // this.wasSynced = true;
        // console.dir(cookies);
    }

    // Get items for the menu
    async getMenu(): Promise<void> {
        // TODO: Get data from server
        // let req: Request = new Request(`${SERVER}/items`);
        // let res = await fetch(req);
        // let json = await res.json();
        // this.menu = json["items"];
        // this.menu = [
        //     {
        //         id: "1",
        //         name: "Chora Masala",
        //         description: "Chora with Masala",
        //         price: 50,
        //         isSpecial: false,
        //         image: "https://ionicframework.com/docs/img/demos/card-media.png"
        //     },
        // ];
        this.menu = fullMenu;
        return;
    }

    // Login the user with email/password
    async login(email: string, password: string): Promise<void> {
        // TODO: Request from server
        // this.user = {
        //     id: "6810afd66dbe14965b550be1",
        //     name: "hello",
        //     email: "sword",
        // };
        let matchUsers = users.filter((e) => e.email === email && e.password === password);
        if (matchUsers.length === 0) {
            return;
        } else {
            this.user = matchUsers[0];
            await CapacitorCookies.setCookie({
                key: "user",
                value: JSON.stringify(this.user),
            });
            if (matchUsers.length > 1) {
                console.warn("Multiple users returned!");
            }
            return;
        }
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
            // TODO: Uncomment and test once database schema is updated to include quantity
            // let req: Request = new Request(`${SERVER}/cart/${this.user?.id}`);
            // let res = await fetch(req);
            // let json = await res.json();
            // this.cart = json["items"];
            // this.cart = [
            //     {
            //         id: "0",
            //         name: "Lunch",
            //         description: "Aloo sabji, 2x roti, rice, daal chawal",
            //         price: 80,
            //         quantity: 1,
            //         image: ""
            //     },
            //     {
            //         id: "1",
            //         name: "Aloo Paratha",
            //         description: "Aloo Paratha",
            //         price: 40,
            //         quantity: 1,
            //         image: ""
            //     },
            // ];
            let carts = baseCarts.filter((e) => e.user === this.user?.id);
            if (carts.length === 0) {
                this.cart = [];
            } else {
                this.cart = carts[0].items;
            }
        }
        return;
    }

    async addToCart(item: FoodItem) {
        let cartItem: CartItem = { ...item, quantity: 1 };
        this.cart.push(cartItem);
        await CapacitorCookies.setCookie({
            key: "cart",
            value: JSON.stringify(this.cart),
        });
        // TODO: Push data to server
    }

    async saveCart(cart: CartItem[]): Promise<void> {
        this.cart = cart;
        // await CapacitorCookies.setCookie({
        //     key: "cart",
        //     value: JSON.stringify(this.cart),
        // });
        // TODO: Sync items to server
        return;
    }

}

const authProvider = new AuthProvider();
// await authProvider.sync();
const UserContext = createContext<AuthProvider>(authProvider);

export { TitleSetterContext, CartContext, UserContext, MenuVisiblity, AuthProvider };