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

  openBtn.addEventListener("click", () => modal.style.display = "block");
  closeBtn.addEventListener("click", () => modal.style.display = "none");

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  togglePassBtn.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  });

  // Dropdown hover (nếu muốn dropdown click thì cần thay đổi HTML & JS)
  const dropdowns = document.querySelectorAll(".dropdown-hover");
  dropdowns.forEach(dropdown => {
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

    if (!movie || movie === "-- Chọn phim --" ||
        !cinema || cinema === "-- Chọn rạp --" ||
        !date ||
        !time || time === "-- Chọn suất chiếu --") {
      alert("Vui lòng chọn đầy đủ thông tin trước khi đặt vé.");
      return;
    }

    const query = `?movie=${encodeURIComponent(movie)}&cinema=${encodeURIComponent(cinema)}&date=${date}&time=${time}`;
    window.location.href = `booking.html${query}`;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const quickBtn = document.querySelector(".book-btn");
  if (quickBtn) {
    quickBtn.addEventListener("click", () => {
      window.location.href = "booking.html";
    });
  }
});
