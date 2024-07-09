import { supabaseDataProvider } from 'ra-supabase';
import { DataProvider } from 'react-admin';
import { supabaseClient } from './../supabase';

export const dataProvider: DataProvider = supabaseDataProvider({
  instanceUrl: import.meta.env.VITE_SUPABASE_URL,
  apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  supabaseClient
});