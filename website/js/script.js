// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true,
});

// Contact Modal Logic
const modal = document.getElementById("contactModal");
const btns = document.querySelectorAll("#contactBtn");
const span = document.querySelector(".close");

// Open modal on any contactBtn click
btns.forEach(btn => {
  btn.onclick = function () {
    modal.style.display = "flex";
  };
});

// Close modal when clicking X
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const status = document.getElementById("formStatus");

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.textContent = "✅ Thanks! Your message has been sent.";
      form.reset();

      // Optionally auto-close modal after delay
      setTimeout(() => {
        modal.style.display = "none";
        status.textContent = ""; // Clear message after closing
      }, 2500);
    } else {
      status.textContent = "❌ Oops! Something went wrong.";
    }
  } catch (error) {
    status.textContent = "❌ Submission failed. Please try again.";
  }
});