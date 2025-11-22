// Mengisi teks "Hi Name" di Home menggunakan JavaScript
function setWelcomeText() {
  const welcomeElement = document.getElementById("welcome-text");
  let name = prompt("Hi! What is your name?");

  if (!name || name.trim() === "") {
    name = "Guest";
  }
  welcomeElement.textContent = `Hi ${name}, Welcome To Website`;
}

// VALIDASI FORM "MESSAGE US"
function validateForm(event) {
  event.preventDefault(); // stop submit default

  // Ambil elemen input
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  // Ambil elemen error
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const messageError = document.getElementById("message-error");

  let isValid = true;

  // Reset error dulu
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";

  // Validasi Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validasi Email (format sederhana)
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Email format is invalid.";
    isValid = false;
  }

  // Validasi Phone (hanya angka & panjang minimal)
  const phoneValue = phoneInput.value.trim();
  const phonePattern = /^[0-9]+$/;
  if (phoneValue === "") {
    phoneError.textContent = "Phone number is required.";
    isValid = false;
  } else if (!phonePattern.test(phoneValue)) {
    phoneError.textContent = "Phone must contain numbers only.";
    isValid = false;
  } else if (phoneValue.length < 8) {
    phoneError.textContent = "Phone number is too short.";
    isValid = false;
  }

  // Validasi Message
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  // Kalau semua valid, tampilkan nilai di HTML
  if (isValid) {
    document.getElementById("submitted-at").textContent =
      new Date().toLocaleString();
    document.getElementById("result-name").textContent = nameInput.value;
    document.getElementById("result-email").textContent = emailInput.value;
    document.getElementById("result-phone").textContent = phoneInput.value;
    document.getElementById("result-message").textContent =
      messageInput.value;

    // Optional: reset form
    document.getElementById("contact-form").reset();
    alert("Message submitted successfully!");
  }
}

// Jalankan ketika DOM sudah siap
document.addEventListener("DOMContentLoaded", function () {
  setWelcomeText();

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", validateForm);
});
