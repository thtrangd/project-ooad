// Khởi tạo Swiper slider
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Dropdown benefits
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("benefitsBtn");
  const dropdown = btn.parentElement;

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("open-signin");
  const modal = document.getElementById("signin-modal");
  const closeBtn = document.querySelector(".close-button");
  const togglePassBtn = document.querySelector(".toggle-password");
  const passwordInput = document.getElementById("password");

  if (!openBtn || !modal || !closeBtn || !togglePassBtn || !passwordInput) {
    console.error("Missing modal elements. Check your HTML.");
    return;
  }

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  togglePassBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});

document.querySelector(".book-btn").addEventListener("click", () => {
  const movie = document.getElementById("movie").value;
  const cinema = document.getElementById("cinema").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!movie || !cinema || !date || !time || movie === "-- Chọn phim --" || cinema === "-- Chọn rạp --" || time === "-- Chọn suất chiếu --") {
    alert("Vui lòng chọn đầy đủ thông tin trước khi đặt vé.");
    return;
  }

  const query = `?movie=${encodeURIComponent(movie)}&cinema=${encodeURIComponent(cinema)}&date=${date}&time=${time}`;
  window.location.href = `booking.html${query}`;
});
