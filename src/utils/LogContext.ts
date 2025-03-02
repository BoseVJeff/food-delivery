import { createContext } from "react";

const LogContext = createContext<(message: string, level?: number, object?: Object) => void>(logger);

/**
 * Log a message to the browser console
 * 
 * Message is displayed differently depending on what level it is set to.
 * 
 * * `null || 0`: `log`
 * * `1`        : `debug`
 * * `2`        : `info`
 * * `3`        : `warn`
 * * `4`        : `error`
 * 
 * @param message Message to be logged
 * @param level Level message must be logged at
 */
function logger(message: string, level?: number, object?: any): void {

    let timestamp = new Date();

    if (object !== undefined) {
        console.groupCollapsed(`${message}`);
    }

    switch (level) {
        case 1:
            console.debug(`[${timestamp.toISOString()}] ${message}`);
            break;
        case 2:
            console.info(`[${timestamp.toISOString()}] ${message}`);
            break;
        case 3:
            console.warn(`[${timestamp.toISOString()}] ${message}`);
            break;
        case 4:
            console.error(`[${timestamp.toISOString()}] ${message}`);
            break;
        default:
            console.log(`[${timestamp.toISOString()}] ${message}`);
            break;
    }

    if (object !== undefined) {
        console.dir(object);
        console.groupEnd();
    }
}

export default LogContext;