// ============================================================
// Doctors — list + appointment booking
// ============================================================

async function initDoctors() {
  const user = await requireAuth();
  if (!user) return;

  const { data: docs } = await sb
    .from("doctors")
    .select("*")
    .eq("is_active", true)
    .order("name");

  const list = $("#doc-list");
  list.innerHTML = "";
  (docs || []).forEach((d) => {
    const init = d.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
    list.insertAdjacentHTML("beforeend", `
      <div class="doc">
        <div class="av">${init}</div>
        <div style="flex:1">
          <b>${escapeHtml(d.name)}</b><br>
          <span class="mute">${escapeHtml(d.specialization || "")} · ${d.experience_years || ""} yrs</span><br>
          <span class="ver">${d.verified ? "✔ Verified" : ""}</span>
        </div>
        <div style="text-align:right">
          <b>₹${d.consultation_fee || 0}</b><br>
          <button style="margin-top:6px;padding:8px 12px;font-size:0.85rem" data-id="${d.id}">Book</button>
        </div>
      </div>
    `);
  });

  list.querySelectorAll("button[data-id]").forEach((btn) => {
    btn.addEventListener("click", () => openBooking(btn.dataset.id));
  });
}

let pendingDoctorId = null;
async function openBooking(doctorId) {
  pendingDoctorId = doctorId;
  $("#dlg").showModal();
}

async function confirmBooking() {
  const user = await currentUser();
  const date = $("#d-date").value;
  const time = $("#d-time").value;
  const mode = $("#d-mode").value;
  if (!date || !time) return toast("Please choose date and time");

  const { error } = await sb.from("appointments").insert({
    user_id: user.id,
    doctor_id: pendingDoctorId,
    appointment_date: date,
    appointment_time: time,
    mode,
    status: "pending",
  });
  if (error) return toast("Could not book appointment");
  $("#dlg").close();
  toast("Appointment booked");
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}

document.addEventListener("DOMContentLoaded", () => {
  if (!$("#doc-list")) return;
  initDoctors();
  $("#dok")?.addEventListener("click", confirmBooking);
  $("#dcancel")?.addEventListener("click", () => $("#dlg").close());
});