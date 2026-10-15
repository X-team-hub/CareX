async function initProfile() {
  const user = await requireAuth();
  if (!user) return;
  
  const meta = user.user_metadata || {};
  const name = meta.full_name || user.email?.split("@")[0] || "User";
  const age = meta.age || "";
  const cycle = meta.cycle_length || "";
  const allergies = meta.allergies || "";
  const medicines = meta.medicines || "";
  
  $("#p-name-view").textContent = name;
  $("#p-av").textContent = name.charAt(0).toUpperCase();
  $("#p-age-view").textContent = age || "—";
  $("#p-cycle-view").textContent = cycle ? `${cycle} days` : "—";
  $("#p-allergy-view").textContent = allergies || "—";
  $("#p-meds-view").textContent = medicines || "—";
  
  $("#p-name").value = name;
  $("#p-age").value = age;
  $("#p-cycle").value = cycle;
  $("#p-allergy").value = allergies;
  $("#p-meds").value = medicines;
}

function editProfile() {
  document.body.classList.add("edit-mode");
  $("#edit-btn").style.display = "none";
}

async function saveProfile() {
  const user = await currentUser();
  if (!user) return;
  
  const name = $("#p-name").value.trim();
  const age = $("#p-age").value.trim();
  const cycle = $("#p-cycle").value.trim();
  const allergies = $("#p-allergy").value.trim();
  const medicines = $("#p-meds").value.trim();
  
  if (!name) return toast("Please enter your name");
  
  if (age && (Number(age) < 8 || Number(age) > 70)) {
    return toast("Please enter a valid age");
  }
  
  if (cycle && (Number(cycle) < 1 || Number(cycle) > 100)) {
    return toast("Please enter a valid cycle length");
  }
  
  const button = $("#save-profile-btn");
  button.disabled = true;
  button.textContent = "Saving...";
  
  const { error } = await sb.auth.updateUser({
    data: {
      full_name: name,
      age,
      cycle_length: cycle,
      allergies,
      medicines
    }
  });
  
  button.disabled = false;
  button.textContent = "Save Profile";
  
  if (error) return toast(error.message);
  
  $("#p-name-view").textContent = name;
  $("#p-av").textContent = name.charAt(0).toUpperCase();
  $("#p-age-view").textContent = age || "—";
  $("#p-cycle-view").textContent = cycle ? `${cycle} days` : "—";
  $("#p-allergy-view").textContent = allergies || "—";
  $("#p-meds-view").textContent = medicines || "—";
  
  document.body.classList.remove("edit-mode");
  $("#edit-btn").style.display = "";
  
  toast("Profile saved successfully");
}

document.addEventListener("DOMContentLoaded", () => {
  if (!$("#p-name-view")) return;
  
  initProfile();
  
  $("#edit-btn")?.addEventListener("click", editProfile);
  $("#save-profile-btn")?.addEventListener("click", saveProfile);
});