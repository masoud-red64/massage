import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://rzompelbpvcjjoqbgocw.supabase.co';
const supabaseAnonKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6b21wZWxicHZjampvcWJnb2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIwODQ0MTIsImV4cCI6MTk4NzY2MDQxMn0.WFpPuPjZEXsRnTgk5wDd0x_kNekMCofS1hVqnDtUEv8';

export const supabase = createClient(supabaseURL, supabaseAnonKey)