// ============================================================
// Cycle & Symptom Tracking — Supabase-backed
// ============================================================

async function initTrack() {
  const user = await requireAuth();
  if (!user) return;
  $("#ps").value = todayStr();
  await renderSymptomChips();
}

async function renderSymptomChips() {
  const wrap = $("#sym-chips");
  wrap.innerHTML = "";
  symptomsList.forEach((key) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.setAttribute("aria-pressed", "false");
    btn.dataset.key = key;
    btn.textContent = t(key);
    btn.addEventListener("click", () => {
      const cur = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", cur ? "false" : "true");
    });
    wrap.appendChild(btn);
  });
}

async function savePeriod(e) {
  e?.preventDefault();
  const start = $("#ps").value;
  const end = $("#pe").value || null;
  if (!start) return toast("Please choose a start date");
  if (end && end < start) return toast("End date must be after start date");

  const cycleLen = end ? diff(start, end) + 1 : null;
  const { error } = await sb.from("cycle_logs").insert({
    user_id: (await currentUser()).id,
    start_date: start,
    end_date: end,
    period_length: cycleLen,
  });
  if (error) return toast("Could not save period");
  toast(t("save_period"));
}

async function saveDailyLog() {
  const user = await currentUser();
  const date = todayStr();
  const flow = $("#flow").value;
  const pain = +$("#pain").value || 0;

  const { error } = await sb.from("daily_logs").upsert({
    user_id: user.id,
    date,
    flow,
    pain,
  }, { onConflict: "user_id,date" });

  if (error) return toast("Could not save log");

  // Save selected symptoms
  const selected = $$("#sym-chips .chip[aria-pressed='true']").map((b) => b.dataset.key);
  if (selected.length) {
    await sb.from("symptom_logs").insert(
      selected.map((s) => ({ user_id: user.id, symptom: s, severity: pain, date }))
    );
  }
  toast(t("save_today"));
}

document.addEventListener("DOMContentLoaded", () => {
  if (!$("#sym-chips")) return;
  initTrack();
  $("#save-period-btn")?.addEventListener("click", savePeriod);
  $("#save-log-btn")?.addEventListener("click", saveDailyLog);
});