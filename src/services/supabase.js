import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ymlniuqfgvgremmjdwqv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltbG5pdXFmZ3ZncmVtbWpkd3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMTc4ODIsImV4cCI6MjAzODY5Mzg4Mn0.XWwVTfj1J8nArHYl-CyAuyIVX46uHPfiWzv9g4g8Y80";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
