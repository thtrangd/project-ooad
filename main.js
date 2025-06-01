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

document.addEventListener("DOMContentLoaded", () => {
  // Modal đăng nhập
  const openBtn = document.getElementById("open-signin");
  const modal = document.getElementById("signin-modal");
  const closeBtn = modal.querySelector(".close-button");
  const togglePassBtn = modal.querySelector(".toggle-password");
  const passwordInput = modal.querySelector("#password");

  openBtn.addEventListener("click", () => (modal.style.display = "block"));
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  togglePassBtn.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  });

  // Dropdown hover
  const dropdowns = document.querySelectorAll(".dropdown-hover");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => dropdown.classList.add("open"));
    dropdown.addEventListener("mouseleave", () => dropdown.classList.remove("open"));
  });

  // Xử lý nút đặt vé
  const bookBtn = document.querySelector(".book-btn");
  bookBtn.addEventListener("click", () => {
    const movie = document.getElementById("movie").value;
    const cinema = document.getElementById("cinema").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const today = new Date().toISOString().split("T")[0];

    if (
      !movie ||
      movie === "-- Chọn phim --" ||
      !cinema ||
      cinema === "-- Chọn rạp --" ||
      !date ||
      date < today ||
      !time ||
      time === "-- Chọn suất chiếu --"
    ) {
      alert("Vui lòng chọn đầy đủ và đúng thông tin (ngày không được ở quá khứ) trước khi đặt vé.");
      return;
    }

    const query = `?movie=${encodeURIComponent(movie)}&cinema=${encodeURIComponent(
      cinema
    )}&date=${date}&time=${time}`;
    window.location.href = `select-seats.html${query}`;
  });

  // Đặt ngày tối thiểu cho input date ngay từ đầu
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;
});


