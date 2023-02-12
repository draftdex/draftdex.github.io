import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AuthService } from "./services/auth-service";
import { Observable, first, map } from "rxjs";
import { StyleService } from "./services/style-service";
import { UserStyle } from "./models/UserStyles.model";

@Injectable({ providedIn: 'root' })
export class StyleResolver implements Resolve<any> {
    constructor(private authService: AuthService,
                private styleService: StyleService) {}

    resolve(): Observable<void> {
        this.authService.configureUserSession();
        return this.styleService.fetchUserStyles(this.authService.userSession.id).pipe(
            first(),
            map((style: UserStyle | null) => {
                if (style) this.styleService.setUserStyles(style);
            })
        );
    }
}