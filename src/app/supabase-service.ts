// Service intended to expose the supabase client to other services
import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { Observable, from, first } from "rxjs";
import { User } from "./models/User.model";

@Injectable({
    providedIn: 'root'      // Ensure this is a singleton service
})
export class SupabaseService {
    
    dbClient: SupabaseClient = createClient('https://kqyshvlibkoatazqavuc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc0MTI3MSwiZXhwIjoxOTU5MzE3MjcxfQ.hMsQnDsKARs4OyTsIpUR2nPR86TQxbvn3hOoyuGEnA8');

    /**
     * Query users table and return observable for hashed password for provided user
     * @param username 
     * @param pwd 
     * @returns 
     */
    getUserCreds(username: string): Observable<User[]> {
        let query = this.dbClient.from('users').select('*');
        query.eq('username', username);
        let user$ = from(this.executeQuery(query)).pipe(first());
        return user$;
    }

    async executeQuery(query: any) {
        let { data, error } = await query;
        return data;
    }
}