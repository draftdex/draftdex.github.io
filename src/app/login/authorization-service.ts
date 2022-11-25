import { Injectable, OnInit } from "@angular/core";
import { SupabaseService } from "../supabase-service";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    constructor(private supabaseClient: SupabaseService) {}

    async signUp() {
        await this.supabaseClient.dbClient.auth.signUp({
            email: 'example@email.com',
            password: 'example-password',
        })
    }

    async signInWithEmail() {
       const data = await this.supabaseClient.dbClient.auth.signIn({
         email: 'johnkmoore98@gmail.com',
         password: 'example-password',
       });
       console.log(data);
    }
}