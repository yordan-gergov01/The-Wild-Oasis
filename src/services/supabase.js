import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gegbxwlhneavclvrxvdb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZ2J4d2xobmVhdmNsdnJ4dmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMjM2MTEsImV4cCI6MjA0NTU5OTYxMX0._nknbw1kUcha6rqbsUy6zvw65KBZEJEOygkgCMLYiy0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
