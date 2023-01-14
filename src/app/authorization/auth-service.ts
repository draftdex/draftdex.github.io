import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SupabaseService } from "../supabase-service";
import * as bcrypt from 'bcryptjs';
import { Subject } from "rxjs";
import { NewUser, User } from "../models/User.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authenticated$ = new Subject();     // Subject to alert subscribers when user is authenticated
    registered$ = new Subject();        // Subject to alert when user has been registered
    userSession: User = User.getGuestAccount();

    constructor(private supabaseClient: SupabaseService,
                private router: Router) {}

    /**
     * Authenticate user by verifying hashes of input and pwd of user matching username
     * @param username 
     * @param pwd 
     */
    async authenticateUser(username: string, pwd: string) {
        this.supabaseClient.getUserCreds(username).subscribe((res: User[]) => {
            if (res.length === 1) {
                this.compareHash(pwd, res[0]);
            } else {
                this.authenticated$.next(false);
            }
        });
    }

    /**
     * Compare manually entered password with stored hash for user
     * @param plaintextPwd 
     * @param hashedPwd 
     */
    private compareHash(plaintextPwd: string, user: User) {
        bcrypt.compare(plaintextPwd, user.password, (err, res) => {
            if (!err) {
                this.authenticated$.next(res);
                if (res) {
                    this.authenticated$.complete();
                    this.userSession = user;
                }
            } else {
                this.authenticated$.error(err);
            }
        });
    }

    public registerUser(newUser: NewUser) {
        const hash = this.generateHash(newUser.password);
        this.supabaseClient.registerUser(newUser.team, newUser.username, hash).subscribe(res => {
            this.registered$.next(res);
        });
    }

    public logout() {
        this.authenticated$ = new Subject();
        this.userSession = User.getGuestAccount();
        this.router.navigate(['login'])
    }

    private generateHash(plaintext: string): string {
        const saltRounds = 10;
        return bcrypt.hashSync(plaintext, saltRounds);
    }
}