import { ReactNode } from "react";

// -----------

/**
 * Type for values needed to define a route
 */
type RouteInfo = {
    /**
     * The route that this corresponds to.
     */
    "route": string,
    /**
     * Text to be shown on the title page.
     */
    "title": string,
    /**
     * Text to be used as text for menu item.
     */
    "label": string,
    /**
     * Icon to be used.
     * 
     * As this will be supplied to an `IonIcon`, prefer using a value imported from `ionicons/icons`.
     */
    "icon": string,
    /**
     * The page to be rendered.
     */
    "page": React.ReactNode,
    "hasMenuItem": boolean,
};

type LayoutArgs = {
    "routes": RouteInfo[],
    "isCompact": boolean,
    "title": string,
    "children": ReactNode
};

type LayoutType = "tab" | "menu" | "compactPane" | "expandedPane";

// --------------------

type CartItem = {
    "id": string,
    "name": string,
    "description": string,
    "price": number,
    "quantity": number,
};

// --------------------

type User = {
    id: string,
    name: string,
}

export type { RouteInfo, LayoutArgs, LayoutType, CartItem, User };