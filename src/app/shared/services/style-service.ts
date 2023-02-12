import { Injectable } from "@angular/core";
import { UserStyle } from "../models/UserStyles.model";
import { SupabaseService } from "./supabase-service";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StyleService {
    constructor(private supabaserService: SupabaseService) {    }

    public fetchUserStyles(userId: string | undefined): Observable<UserStyle | null> {
        if (userId === undefined) return of(null);

        return this.supabaserService.getStylesForUser(userId);
    }

    public setUserStyles(style: UserStyle): void {
        document.documentElement.style.setProperty('--main-background', style.mainBackground);
        document.documentElement.style.setProperty('--header-background', style.headerBackground);
        document.documentElement.style.setProperty('--header-text', style.headerText);
        document.documentElement.style.setProperty('--main-text-dark', style.mainTextDark);
        document.documentElement.style.setProperty('--main-text-light', style.mainTextLight);
        document.documentElement.style.setProperty('--dark-background', style.darkBackground);
        document.documentElement.style.setProperty('--light-background', style.lightBackground);
        document.documentElement.style.setProperty('--button-color1', style.buttonColor1);
        document.documentElement.style.setProperty('--button-color2', style.buttonColor2);
        document.documentElement.style.setProperty('--button-text', style.buttonText);
        document.documentElement.style.setProperty('--table-background1', style.tableBackground1);
        document.documentElement.style.setProperty('--table-background2', style.tableBackground2);
        document.documentElement.style.setProperty('--table-header', style.tableHeader);
        document.documentElement.style.setProperty('--table-text', style.tableText);
        document.documentElement.style.setProperty('--table-buttons', style.tableButtons);
        document.documentElement.style.setProperty('--hyperlink-pc', style.hyperlinkPC);
        document.documentElement.style.setProperty('--hyperlink-ac', style.hyperlinkAC);
    }
}