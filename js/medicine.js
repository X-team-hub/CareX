let medicineImageData = null;
let medicineImageMime = "image/jpeg";
let medicineBusy = false;
let medicineAssistantSessionId = null;

async function initMedicine() {
  const user = await requireAuth();
  if (!user) return;
  updateMedicineLanguage();
}

function updateMedicineLanguage() {
  const hi = getLang() === "hi";
  const input = $("#med-input");
  const nameButton = $("#name-analyze-button");
  const imageButton = $("#image-analyze-button");
  const resultHeading = $("#medicine-result-heading");

  if (input) {
    input.placeholder = hi ? "दवा का नाम लिखें" : "Enter medicine name";
  }

  if (nameButton && !medicineBusy) {
    nameButton.textContent = hi ? "दवा की जानकारी दें" : "Explain Medicine";
  }

  if (imageButton && !medicineBusy) {
    imageButton.textContent = hi ? "फोटो से दवा की जानकारी दें" : "Explain from Photo";
  }

  if (resultHeading) {
    resultHeading.textContent = hi ? "दवा की जानकारी" : "Medicine Explanation";
  }
}

function setMedicineStatus(message, type = "") {
  const box = $("#medicine-status");
  if (!box) return;

  box.className = `status-box ${type}`;
  box.textContent = message;
  box.style.display = "block";
}

function setMedicineLoading(text) {
  const box = $("#medicine-status");
  if (!box) return;

  box.className = "status-box";
  box.innerHTML = `
    <span class="medicine-spinner"></span>
    ${escapeHtml(text)}
  `;
  box.style.display = "block";
}

function hideMedicineStatus() {
  const box = $("#medicine-status");
  if (!box) return;
  box.style.display = "none";
  box.textContent = "";
}

function showMedicineResult(text) {
  const result = $("#medicine-result");
  const content = $("#medicine-result-content");

  if (!result || !content) return;

  content.textContent = text;
  result.style.display = "block";
}

function showMedicineError(message) {
  const result = $("#medicine-result");
  const content = $("#medicine-result-content");

  if (result && content) {
    content.textContent = message;
    result.style.display = "block";
  }
}

function removeMedicineImage() {
  medicineImageData = null;
  medicineImageMime = "image/jpeg";

  const preview = $("#image-preview");
  const image = $("#medicine-preview-image");
  const analyzeButton = $("#image-analyze-button");

  if (preview) preview.style.display = "none";
  if (image) image.src = "";
  if (analyzeButton) analyzeButton.disabled = true;

  hideMedicineStatus();
}

function resizeMedicineImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();

      image.onload = () => {
        const maxSize = 1600;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));

        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);

        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        resolve({
          data: canvas.toDataURL("image/jpeg", 0.78).split(",")[1],
          mime: "image/jpeg"
        });
      };

      image.onerror = reject;
      image.src = reader.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleMedicineImage(input) {
  const file = input.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    setMedicineStatus(
      getLang() === "hi"
        ? "कृपया केवल फोटो चुनें।"
        : "Please select an image.",
      "error"
    );
    input.value = "";
    return;
  }

  if (file.size > 12 * 1024 * 1024) {
    setMedicineStatus(
      getLang() === "hi"
        ? "फोटो 12 MB से छोटी होनी चाहिए।"
        : "Image must be smaller than 12 MB.",
      "error"
    );
    input.value = "";
    return;
  }

  try {
    medicineBusy = true;

    setMedicineLoading(
      getLang() === "hi"
        ? "फोटो तैयार की जा रही है..."
        : "Preparing photo..."
    );

    const resized = await resizeMedicineImage(file);

    medicineImageData = resized.data;
    medicineImageMime = resized.mime;

    const preview = $("#image-preview");
    const image = $("#medicine-preview-image");
    const analyzeButton = $("#image-analyze-button");

    if (image) {
      image.src = `data:${medicineImageMime};base64,${medicineImageData}`;
    }

    if (preview) preview.style.display = "block";
    if (analyzeButton) analyzeButton.disabled = false;

    setMedicineStatus(
      getLang() === "hi"
        ? "फोटो तैयार है। अब दवा की जानकारी प्राप्त करें।"
        : "Photo ready. Select Explain from Photo to continue.",
      "success"
    );
  } catch (error) {
    console.error("Medicine image error:", error);

    setMedicineStatus(
      getLang() === "hi"
        ? "फोटो तैयार नहीं हो सकी। दोबारा कोशिश करें।"
        : "Could not prepare the photo. Please try again.",
      "error"
    );
  } finally {
    medicineBusy = false;
    input.value = "";
  }
}

async function analyzeMedicine() {
  if (medicineBusy) return;

  const input = $("#med-input");
  const name = input?.value.trim() || "";

  if (!name && !medicineImageData) {
    setMedicineStatus(
      getLang() === "hi"
        ? "दवा का नाम लिखें या फोटो चुनें।"
        : "Enter a medicine name or choose a photo.",
      "error"
    );
    return;
  }

  try {
    medicineBusy = true;

    const lang = getLang() === "hi" ? "hi" : "en";

    setMedicineLoading(
      lang === "hi"
        ? "दवा की जानकारी तैयार की जा रही है..."
        : "Preparing medicine information..."
    );

    const medicinePrompt = medicineImageData
      ? `Identify the medicine shown in the attached photo${
          name ? ` and check whether it matches the name "${name}"` : ""
        }. Read the visible name and active ingredient if possible, then explain common uses, important warnings, and common side effects. Do not give a dose or tell me to start, stop, or change any medicine. If the medicine cannot be identified confidently, say so and ask me to check the package with a pharmacist.`
      : `Explain the medicine "${name}". Identify its active ingredient if known, common uses, important warnings, and common side effects. Do not give a dose or tell me to start, stop, or change any medicine. If the name is unclear, ask me to check the spelling or package.`;
    const message = `${medicinePrompt} ${
      lang === "hi" ? "उत्तर हिंदी में दें।" : "Respond in English."
    }`;

    const { data: sessionData, error: sessionError } =
      await carexSupabase.auth.getSession();

    if (sessionError || !sessionData?.session?.access_token) {
      throw new Error("Authentication required");
    }

    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/assistant`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${sessionData.session.access_token}`
        },
        body: JSON.stringify({
          message,
          session_id: medicineAssistantSessionId,
          image: medicineImageData || undefined,
          mime: medicineImageMime
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error || "Could not get medicine information.");
    }

    medicineAssistantSessionId = data?.data?.session_id || medicineAssistantSessionId;

    const result =
      data?.data?.reply ||
      data?.result ||
      data?.answer ||
      data?.message ||
      data?.text;

    if (!result) {
      throw new Error("No medicine information returned");
    }

    hideMedicineStatus();
    showMedicineResult(result);
  } catch (error) {
    console.error("Medicine explanation error:", error);

    showMedicineError(
      getLang() === "hi"
        ? "दवा की जानकारी प्राप्त नहीं हो सकी। कृपया दवा का नाम या साफ़ फोटो दोबारा भेजें।"
        : "Could not get medicine information. Please try the medicine name or a clearer photo again."
    );
  } finally {
    medicineBusy = false;
    updateMedicineLanguage();

    const imageButton = $("#image-analyze-button");
    if (imageButton) {
      imageButton.disabled = !medicineImageData;
    }
  }
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

document.addEventListener("DOMContentLoaded", () => {
  if (!$("#med-input")) return;

  initMedicine();

  $("#med-input")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      analyzeMedicine();
    }
  });

  $("#med-camera")?.addEventListener("change", function () {
    handleMedicineImage(this);
  });

  $("#med-gallery")?.addEventListener("change", function () {
    handleMedicineImage(this);
  });

  document.addEventListener("carexLanguageChanged", () => {
    updateMedicineLanguage();
  });
});