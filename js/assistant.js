let currentSessionId = null;

async function initAssistant() {
  const user = await requireAuth();
  if (!user) return;
  loadLatestSession();
}

async function loadLatestSession() {
  const { data } = await sb
    .from("chat_sessions")
    .select("id, title")
    .order("updated_at", { ascending: false })
    .limit(1);

  if (data?.length) {
    currentSessionId = data[0].id;
    await loadMessages(currentSessionId);
  } else {
    addBotMessage(t("ask_carex"));
  }
}

async function loadMessages(sessionId) {
  const { data } = await sb
    .from("chat_messages")
    .select("role, message")
    .eq("session_id", sessionId)
    .order("created_at", { ascending: true })
    .limit(50);

  const chat = $("#chat");
  chat.innerHTML = "";

  (data || []).forEach((m) => {
    addMessage(m.message, m.role === "user" ? "me" : "bot");
  });

  chat.scrollTop = chat.scrollHeight;
}

function addMessage(text, cls) {
  const chat = $("#chat");
  const div = document.createElement("div");

  div.className = "msg " + cls;
  div.textContent = text;

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function addBotMessage(text) {
  addMessage(text, "bot");
}

function showTyping() {
  const chat = $("#chat");
  const div = document.createElement("div");

  div.className = "msg bot";
  div.id = "typing";
  div.textContent = "…";
  div.style.opacity = "0.6";

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function hideTyping() {
  $("#typing")?.remove();
}

async function sendAssistantMessage(text) {
  if (!text || !text.trim()) return;

  addMessage(text.trim(), "me");
  showTyping();

  try {
    const { data, error } = await sb.functions.invoke("assistant", {
      body: {
        message: text.trim(),
        session_id: currentSessionId
      }
    });

    hideTyping();

    if (error) {
      addBotMessage(error.message || "AI service is unavailable.");
      return;
    }

    if (!data?.success) {
      addBotMessage(data?.error || "Something went wrong. Please try again.");
      return;
    }

    currentSessionId = data.data.session_id;
    addBotMessage(data.data.reply);

  } catch (err) {
    hideTyping();
    addBotMessage("Network error. Please check your connection.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!$("#chat")) return;

  initAssistant();

  $("#cf")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = $("#ci");
    const value = input.value.trim();

    if (!value) return;

    input.value = "";
    sendAssistantMessage(value);
  });

  $("#new-chat")?.addEventListener("click", () => {
    currentSessionId = null;
    $("#chat").innerHTML = "";
    addBotMessage(t("ask_carex"));
  });
});