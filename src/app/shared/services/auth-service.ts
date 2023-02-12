import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SupabaseService } from "./supabase-service";
import * as bcrypt from 'bcryptjs';
import { Observable, Subject } from "rxjs";
import { NewUser, User } from "../models/User.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authenticated$ = new Subject();     // Subject to alert subscribers when user is authenticated
    userSession: User = User.getGuestAccount();

    constructor(private supabaseClient: SupabaseService,
                private router: Router) {}

    /**
     * Authenticate user by verifying hashes of input and pwd of user that match username
     * @param username 
     * @param pwd 
     */
    async authenticateUser(username: string, inputPwd: string) {
        this.supabaseClient.getUserCreds(username).subscribe({
            next: (res: User[]) => {
                if (res.length === 1) {
                    this.compareHash(inputPwd, res[0]);
                } else {
                    this.authenticated$.next(false);
                }
            }, 
            error: error => console.error(`Error retrieving user ${username}`, error)
        });
    }

    /**
     * Compare manually entered password with stored hash for user
     */
    private compareHash(plaintextPwd: string, user: User) {
        bcrypt.compare(plaintextPwd, user.password, (err, res) => {
            if (!err) {
                if (res) {
                    user.password = '';
                    this.userSession = user;
                }
                this.authenticated$.next(res);
                this.authenticated$.complete();
            } else {
                this.authenticated$.error(err);
            }
        });
    }

    public registerUser(newUser: NewUser): Observable<any> {
        const hash = this.generateHash(newUser.password);
        return this.supabaseClient.registerUser(newUser.team, newUser.username, hash);
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