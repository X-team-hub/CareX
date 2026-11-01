/* CareX Doctor module: uses the single project configuration at /js/config.js. */
(function () {
  if (!window.CAREX_CONFIG) throw new Error('CareX configuration is not loaded.');
  if (!window.supabase) throw new Error('Supabase JS client is not loaded.');
  window.doctorSupabase = window.supabase.createClient(
    window.CAREX_CONFIG.supabaseUrl,
    window.CAREX_CONFIG.supabasePublishableKey,
    { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
  );
})();
