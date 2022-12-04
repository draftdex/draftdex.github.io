import { Injectable } from "@angular/core";
import { SupabaseService } from "../supabase-service";
import * as bcrypt from 'bcryptjs';
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authenticated$ = new Subject();     // Subject to alert subscribers when user is authenticated

    constructor(private supabaseClient: SupabaseService) {}

    async signUp() {
        await this.supabaseClient.dbClient.auth.signUp({
            email: 'example@email.com',
            password: 'example-password',
        })
    }

    /**
     * Authenticate user by verifying hashes of input and pwd of user matching username
     * @param username 
     * @param pwd 
     */
    async authenticateUser(username: string, pwd: string) {
        this.supabaseClient.getUserCreds(username).subscribe((res: any[]) => {
            if (res.length === 1) {
                this.compareHash(pwd, res[0].password);
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
    private compareHash(plaintextPwd: string, hashedPwd: string) {
        bcrypt.compare(plaintextPwd, hashedPwd, (err, res) => {
            if (!err) {
                this.authenticated$.next(res);
                if (res) this.authenticated$.complete();
            } else {
                this.authenticated$.error(err);
            }
        });
    }

    private registerUser(team: string, username: string, plaintextPass: string) {
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(plaintextPass, salt, (err, hash) => {
                // TODO: Add user, hash to db
                // this.authenticated$.complete();
            });
        });
    }

    private async validateUser(hash:string, testPass: string) {
       // const testHash = await argon2.hash(testPass, {
       //   memoryCost: 65536, // 64KB,
       //   timeCost: 3, // # iters,
       //   parallelism: 4
       // });
    }

    private logout() {
        this.authenticated$ = new Subject();
    }
}