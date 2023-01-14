import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SupabaseService } from "../supabase-service";
import * as bcrypt from 'bcryptjs';
import { Subject } from "rxjs";
import { User } from "../models/User.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authenticated$ = new Subject();     // Subject to alert subscribers when user is authenticated
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

    public registerUser(team: string, username: string, plaintextPass: string) {
        console.log('register used!')
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(plaintextPass, salt, (err, hash) => {
                // TODO: Add user, hash to db
                // this.authenticated$.complete();
            });
        });
    }

    public logout() {
        this.authenticated$ = new Subject();
        this.userSession = User.getGuestAccount();
        this.router.navigate(['login'])
    }
}