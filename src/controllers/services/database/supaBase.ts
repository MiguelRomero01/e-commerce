import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ssihskolqyyeelocokhm.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzaWhza29scXl5ZWVsb2Nva2htIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNDI4Nzc2NCwiZXhwIjoyMDQ5ODYzNzY0fQ.gZuZTamNWG5_Kn7AyACrSXVVZagzwJa9lFtQ57RyfuY"

export const supabase = createClient(supabaseUrl, supabaseKey);

