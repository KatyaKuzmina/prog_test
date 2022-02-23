import { BasePage } from '../pageobjects/basePage.js'

class Pages {
    constructor() {
        this.basePage = new BasePage();
    }
}

export const pages = new Pages(); 
