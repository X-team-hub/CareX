// ============================================================
// Insights — computed from real cycle data
// ============================================================

async function initInsights() {
  const user = await requireAuth();
  if (!user) return;

  const { data: cycles } = await sb
    .from("cycle_logs")
    .select("start_date, end_date, cycle_length, period_length")
    .eq("user_id", user.id)
    .order("start_date", { ascending: true });

  if (!cycles || cycles.length < 2) {
    $("#ins-summary").textContent = getLang() === "hi"
      ? "अभी पर्याप्त डेटा नहीं है। कृपया कुछ और पीरियड लॉग करें।"
      : "Not enough data yet. Please log a few more periods.";
    return;
  }

  // Compute lengths between consecutive starts
  const lengths = [];
  for (let i = 1; i < cycles.length; i++) {
    lengths.push(diff(cycles[i - 1].start_date, cycles[i].start_date));
  }
  const periodLens = cycles.filter((c) => c.period_length).map((c) => c.period_length);

  const avg = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;
  const avgCycle = avg(lengths);
  const avgPeriod = avg(periodLens);
  const variation = lengths.length > 1 ? Math.max(...lengths) - Math.min(...lengths) : 0;

  $("#sc").textContent = avgCycle ? avgCycle.toFixed(1) : "–";
  $("#sp").textContent = avgPeriod ? avgPeriod.toFixed(1) : "–";
  $("#sv").textContent = variation || "–";

  // Render bars (last 6)
  const bars = $("#bars");
  bars.innerHTML = "";
  const max = Math.max(40, ...lengths.slice(-6));
  lengths.slice(-6).forEach((l) => {
    const d = document.createElement("div");
    d.style.height = (l / max * 100) + "%";
    d.innerHTML = `<span>${l}</span>`;
    bars.appendChild(d);
  });

  // Neutral summary
  $("#ins-summary").textContent = getLang() === "hi"
    ? `आपके लॉग किए गए ${cycles.length} पीरियड्स के आधार पर।`
    : `Based on ${cycles.length} logged periods.`;

  // Cache insights
  await sb.from("insights").upsert({
    user_id: user.id,
    avg_cycle_length: avgCycle,
    avg_period_length: avgPeriod,
    cycle_variation: variation,
    last_cycle_count: cycles.length,
  }, { onConflict: "user_id" });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!$("#sc")) return;
  initInsights();
});