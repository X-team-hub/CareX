const CAREX_CONFIG = window.CAREX_CONFIG || {};

const SUPABASE_URL = CAREX_CONFIG.supabaseUrl || '';
const SUPABASE_KEY = CAREX_CONFIG.supabasePublishableKey || '';

if (!window.supabase || !SUPABASE_URL || !SUPABASE_KEY) {
  console.error(
    'CareX Supabase configuration is missing. Run scripts/sync-config.mjs after setting .env.'
  );
}

const carexSupabase =
  window.supabase && SUPABASE_URL && SUPABASE_KEY
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
    : null;
