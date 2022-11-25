// Service intended to expose the supabase client to other services
import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

@Injectable({
    providedIn: 'root'      // Ensure this is a singleton service
})
export class SupabaseService {
    
    dbClient: SupabaseClient = createClient('https://kqyshvlibkoatazqavuc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc0MTI3MSwiZXhwIjoxOTU5MzE3MjcxfQ.hMsQnDsKARs4OyTsIpUR2nPR86TQxbvn3hOoyuGEnA8');

}