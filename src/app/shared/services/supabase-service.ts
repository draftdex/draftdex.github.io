// Service intended to expose the supabase client to other services
import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { Observable, from, first, map } from "rxjs";
import { User } from "../models/User.model";
import { UserStyle } from "../models/UserStyles.model";

@Injectable({
    providedIn: 'root'      // Ensure this is a singleton service
})
export class SupabaseService {
    
    dbClient: SupabaseClient = createClient('https://kqyshvlibkoatazqavuc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc0MTI3MSwiZXhwIjoxOTU5MzE3MjcxfQ.hMsQnDsKARs4OyTsIpUR2nPR86TQxbvn3hOoyuGEnA8');

    getUserCreds(username: string): Observable<User[]> {
        let query = this.dbClient.from('users').select('*');
        query.eq('username', username);
        let user$ = from(this.executeQuery(query)).pipe(first());
        return user$;
    }

    getStylesForUser(userId: string | undefined): Observable<any> {
        let query = this.dbClient.from('palette').select('*');
        query.eq('user_id', userId);
        let userStyles$ = from(this.executeQuery(query)).pipe(
            first(),
            map((res: UserStyle[]) => new UserStyle(res[0])));
        return userStyles$;
    }

    getUnclaimedTeams(): Observable<string[]> {
        let query = this.dbClient.from('users').select('team');
        query.eq('claimed', false);
        let availableTeams$ = from(this.executeQuery(query)).pipe(
            first(),
            map(res => res.map((user: { team: string }) => user.team)));
        return availableTeams$;
    }

    registerUser(team: string, username: string, pwd: string): Observable<any> {
        let query = this.dbClient.from('users')
            .update({username: username, password: pwd, claimed: true})
            .eq('team', team);
        let newUser$ = from(this.executeQuery(query)).pipe(first());
        return newUser$;
    }

    getPokemonForTeam(team: string | undefined): Observable<any> {
        const query = this.dbClient.from('pokemonInfo')
            .select('*')
            .or('tier.eq.1, tier.eq.2, tier.eq.3, tier.eq.4')
            .order('tier',  { ascending: true });
        if (team !== 'WW' && team !== undefined) query.eq('team', team);
        let pokemonForTeam$ = from(this.executeQuery(query)).pipe(first());
        return pokemonForTeam$;
    }

    getPokemonFromFilters(filters: any): Observable<any> {
        let query = this.dbClient.from('pokemonInfo').select();
        query = this.applyFiltersToQuery(query, filters);
        let filteredPokemon$ = from(this.executeQuery(query)).pipe(first());
        return filteredPokemon$;
    }

    private applyFiltersToQuery(query: any, filters: any): any {
        // Ability filters
        if (filters.ability) 
            query.or(`ability1.ilike.${filters.ability},ability2.ilike.${filters.ability},hiddenAbility.ilike.${filters.ability}`);
  
        // Available filter
        if (filters.available) 
            query.eq('available', filters.available);

        // Tier filter
        if (filters.tier) {
            query.order('tier',  { ascending: true });
            if ( filters.tier !== 'All') {
                if (filters.tier === 'My Team' && filters.team) {
                    //TODO -- Ensure team is selected properly
                    query.ilike('team', filters.team);
                } else {
                    query.ilike('tier', filters.tier);  // ilike case insensitive match
                }
            }
        }

        // Type filters
        if (filters.type1 || filters.type2) {
            if (filters.dualTypeExclusive) {
            // Dual-typing required
            query.or(`and(type1.eq.${filters.type1},type2.eq.${filters.type2}),and(type1.eq.${filters.type2},type2.eq.${filters.type1})`);
            } else {
            // Dual-typing optional
            query.or(`type1.eq.${filters.type1},type1.eq.${filters.type2},type2.eq.${filters.type1},type2.eq.${filters.type2}`);
            }
        }

        return query;
    }

    async executeQuery(query: any) {
        let { data, error } = await query;
        if (error) console.error(error);
        return data;
    }
}