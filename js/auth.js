const sb = carexSupabase;

// Google Signup / Login
async function signInWithGoogle() {
  try {
    const redirectUrl = new URL(
      "home.html",
      window.location.href
    ).href;

    const { error } = await sb.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl
      }
    });

    if (error) {
      toast("Google Sign-in Error: " + error.message);
    }
  } catch (error) {
    toast("Google Sign-in Error: " + error.message);
  }
}

async function signupWithGoogle() {
  await signInWithGoogle();
}

async function loginWithGoogle() {
  await signInWithGoogle();
}

// Email Signup
async function handleSignup(e) {
  e.preventDefault();

  const fd = new FormData(e.target);

  const fullName = (fd.get("full_name") || "").trim();
  const mobile = (fd.get("mobile") || "").trim();
  const email = (fd.get("email") || "").trim();
  const userId = (fd.get("user_id") || "").trim();
  const password = fd.get("password") || "";
  const confirm = fd.get("confirm_password") || "";

  if (!fullName || !mobile || !email || !userId || !password || !confirm) {
    return toast("Please fill all fields");
  }

  if (password !== confirm) {
    return toast("Passwords do not match");
  }

  if (!/^[0-9]{10}$/.test(mobile)) {
    return toast("Invalid mobile number");
  }

  if (password.length < 8) {
    return toast("Password must be at least 8 characters");
  }

  try {
    const { error } = await sb.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
          mobile: mobile,
          username: userId,
          language: typeof getLang === "function" ? getLang() : "en"
        }
      }
    });

    if (error) {
      return toast(error.message);
    }

    toast("Account created! Please check your email to verify.");

    setTimeout(function () {
      window.location.href = "login.html";
    }, 1500);
  } catch (error) {
    toast("Signup Error: " + error.message);
  }
}

// Email Login
async function handleLogin(e) {
  e.preventDefault();

  const errorBox = document.getElementById("loginError");
  const form = e.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton ? submitButton.textContent : "";
  let loginSucceeded = false;

  if (errorBox) {
    errorBox.textContent = "";
    errorBox.style.display = "none";
  }

  const fd = new FormData(e.target);
  const email = (fd.get("email") || "").trim();
  const password = fd.get("password") || "";

  if (!email || !password) {
    showLoginError("Please enter your email and password.");
    return;
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
  }

  try {
    const { error } = await sb.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      const code = error.code || error.error_code;
      if (code === "invalid_credentials") {
        showLoginError("Email or password is incorrect. Check your details and try again.");
      } else if (code === "email_not_confirmed") {
        showLoginError("Please verify your email address before logging in.");
      } else if (code === "too_many_requests" || error.status === 429) {
        showLoginError("Too many login attempts. Please wait a moment and try again.");
      } else {
        showLoginError(`Login failed: ${error.message || "Please try again."}`);
      }
      return;
    }

    loginSucceeded = true;
    toast("Login successful!");

    setTimeout(function () {
      window.location.href = "home.html";
    }, 500);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    showLoginError(
      /failed to fetch|network|load failed/i.test(message)
        ? "Could not connect to CareX. Check your internet connection and try again."
        : `Login failed: ${message}`
    );
  } finally {
    if (!loginSucceeded && submitButton) {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitButton.textContent = originalButtonText;
    }
  }
}

function showLoginError(message) {
  const errorBox = document.getElementById("loginError");
  if (errorBox) {
    errorBox.textContent = message;
    errorBox.style.display = "block";
    errorBox.focus();
    return;
  }
  toast(message);
}

// Forgot Password
async function handleForgotPassword(e) {
  e.preventDefault();

  const fd = new FormData(e.target);
  const input = (fd.get("recover_input") || "").trim();

  if (!input) {
    return toast("Please enter your email");
  }

  const email = input;

  try {
    const redirectUrl = new URL(
      "reset-password.html",
      window.location.href
    ).href;

    const { error } = await sb.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl
    });

    if (error) {
      return toast("Could not send reset link: " + error.message);
    }

    toast("Password reset link sent to your email.");
  } catch (error) {
    toast("Password Error: " + error.message);
  }
}

// Reset Password
async function handleResetPassword(e) {
  e.preventDefault();

  const fd = new FormData(e.target);
  const password = fd.get("password") || "";
  const confirm = fd.get("confirm_password") || "";

  if (!password || !confirm) {
    return toast("Please fill all fields");
  }

  if (password !== confirm) {
    return toast("Passwords do not match");
  }

  if (password.length < 8) {
    return toast("Password must be at least 8 characters");
  }

  try {
    const { error } = await sb.auth.updateUser({
      password: password
    });

    if (error) {
      return toast(error.message);
    }

    toast("Password updated! Please login.");

    setTimeout(function () {
      window.location.href = "login.html";
    }, 1200);
  } catch (error) {
    toast("Password Error: " + error.message);
  }
}

// Logout
async function logout() {
  try {
    const { error } = await sb.auth.signOut();

    if (error) {
      return toast("Logout Error: " + error.message);
    }

    window.location.href = "index.html";
  } catch (error) {
    toast("Logout Error: " + error.message);
  }
}

// Get Current User
async function currentUser() {
  const { data, error } = await sb.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  return data.user;
}

// Require Login
async function requireAuth() {
  const user = await currentUser();

  if (!user) {
    window.location.href = "login.html";
    return null;
  }

  return user;
}

// Auth State Change
function onAuthStateChange(callback) {
  return sb.auth.onAuthStateChange(function (event, session) {
    callback(event, session);
  });
}
