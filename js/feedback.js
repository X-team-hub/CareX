// ============================================
// CareX Feedback
// Uses the existing carexSupabase client
// from js/supabase.js
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("feedbackForm");
  const submitButton = document.getElementById("submitButton");
  const statusMessage = document.getElementById("statusMessage");

  if (!form) {
    console.error("CareX Feedback: feedbackForm not found.");
    return;
  }

  // supabase.js must be loaded before this file.
  if (typeof carexSupabase === "undefined" || !carexSupabase) {
    console.error(
      "CareX Feedback: carexSupabase is not available."
    );

    showStatus(
      "Supabase configuration is missing. Please check your .env and config.js.",
      "error"
    );

    return;
  }


  // ============================================
  // SUBMIT FEEDBACK
  // ============================================

  form.addEventListener("submit", async (event) => {

    event.preventDefault();
    clearStatus();

    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const category =
      document.getElementById("category").value;

    const message =
      document.getElementById("message").value.trim();

    const selectedRating =
      document.querySelector(
        'input[name="rating"]:checked'
      );

    const rating =
      selectedRating
        ? Number(selectedRating.value)
        : null;


    // ============================================
    // VALIDATION
    // ============================================

    if (!category) {
      showStatus(
        "Please select a feedback category.",
        "error"
      );
      return;
    }

    if (!message) {
      showStatus(
        "Please enter your feedback.",
        "error"
      );
      return;
    }

    if (message.length > 2000) {
      showStatus(
        "Feedback must be 2000 characters or less.",
        "error"
      );
      return;
    }

    if (email && !isValidEmail(email)) {
      showStatus(
        "Please enter a valid email address.",
        "error"
      );
      return;
    }


    submitButton.disabled = true;
    submitButton.textContent = "Sending...";


    try {

      // ============================================
      // GET LOGGED-IN USER
      // ============================================

      let user = null;

      try {

        const {
          data,
          error
        } = await carexSupabase.auth.getUser();

        if (!error) {
          user = data?.user || null;
        }

      } catch (authError) {

        console.warn(
          "Could not get current user:",
          authError
        );

      }


      // ============================================
      // INSERT
      // ============================================

      const feedbackData = {
        user_id: user?.id || null,
        name: name || null,
        email: email || null,
        category,
        rating,
        message
      };

      console.log(
        "Submitting CareX feedback:",
        feedbackData
      );


      const { error } =
        await carexSupabase
          .from("feedback")
          .insert(feedbackData);


      if (error) {
        console.error(
          "Supabase feedback error:",
          error
        );

        throw error;
      }


      // ============================================
      // SUCCESS
      // ============================================

      form.reset();

      showStatus(
        "Thank you! Your feedback has been submitted successfully.",
        "success"
      );


    } catch (error) {

      console.error(
        "CareX feedback submission failed:",
        error
      );

      showStatus(
        "Something went wrong while sending your feedback. Please try again.",
        "error"
      );

    } finally {

      submitButton.disabled = false;
      submitButton.textContent = "Send Feedback";

    }

  });


  // ============================================
  // HELPERS
  // ============================================

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = `status ${type}`;
  }


  function clearStatus() {
    statusMessage.textContent = "";
    statusMessage.className = "status";
  }

});