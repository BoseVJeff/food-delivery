import { createContext } from "react";

/**
 * `true`  - Light theme
 * 
 * `false` - Dark theme
 * 
 * `null`  - System Theme
 */
const ThemeContext = createContext<boolean | null>(null);

export default ThemeContext;