'use strict'
import fs from 'fs';

export default class Helper {

    /**
     * 
     * @param obj 
     * @returns 
     */
    static IsNullOrEmpty(obj: any): boolean {
        return (obj === '' || obj === undefined || obj === null);
    }

    /**
     * 
     * @param method 
     * @param message 
     * @returns 
     */
    static ProcessError(method: string, message: string): string {
        let error: string = `\r\n${new Date().toISOString()}:${method} -> ${message}`;
        console.error(error);
        fs.appendFile(`errors.txt`, error, (err) => {
            if (err)
                console.error(`processError error -> ${err}`);
        });
        return 'Unexpected error has ocurred!';
    }
}
