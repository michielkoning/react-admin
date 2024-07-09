import { supabaseAuthProvider } from 'ra-supabase';
import { supabaseClient } from './../supabase';

export const authProvider = supabaseAuthProvider(supabaseClient, {
    getIdentity: async user => {
         return await {
            id: user.id,
            fullName: user.email,
        };
    },
});
