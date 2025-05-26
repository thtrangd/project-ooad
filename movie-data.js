const movieSelect = document.getElementById("movie");
const cinemaSelect = document.getElementById("cinema");
const timeSelect = document.getElementById("time");

const movies = [
  {
    id: "0",
    title: "Mưa Lửa - Anh Trai Vượt Ngàn Chông Gai",
    image: "images/image1.jpg",
    duration: 115,
    date: "2025-05-20",
    country: "Việt Nam",
    producer: "Galaxy Studio",
    director: "Nguyễn Văn A",
    cast: "Lý Hải, Việt Hương",
    genre: "Hành động, Tâm lý",
    description: "Một cuộc hành trình cảm động của hai anh em vượt qua thử thách.",
    trailer: "https://www.youtube.com/embed/Z1BCujX3pw8",
    showtimes: ["09:00", "12:30", "16:00", "19:30"]
  },
  {
    id: "1",
    title: "Thám Tử Kiên: Kỳ Án Không Đầu",
    image: "images/image2.jpg",
    duration: 125,
    date: "2025-05-12",
    country: "Việt Nam",
    producer: "BHD",
    director: "Trần Bửu Lộc",
    cast: "Hoài Linh, Jun Vũ",
    genre: "Trinh thám, Hài",
    description: "Một vụ án bí ẩn với những tình tiết bất ngờ và hài hước.",
    trailer: "https://www.youtube.com/embed/Z1BCujX3pw8",
    showtimes: ["10:00", "14:00", "18:00", "21:00"]
  },
  {
    id: "2",
    title: "Until Dawn: Bí Mật Kinh Hoàng",
    image: "images/image3.jpg",
    duration: 98,
    date: "2025-05-15",
    country: "Mỹ",
    producer: "Blumhouse Productions",
    director: "James Wan",
    cast: "Emma Stone, Dylan O'Brien",
    description: "Một nhóm bạn trẻ phát hiện ra bí ẩn kinh hoàng khi đến căn nhà gỗ trên núi.",
    trailer: "https://www.youtube.com/embed/example3",
    genre: "Kinh dị, Giật gân",
    showtimes: ["11:00", "15:00", "19:00"]
  },
  {
    id: "3",
    title: "Lật Mặt 8: Vòng Tay Nắng",
    image: "images/image4.jpg",
    duration: 110,
    date: "2025-04-27",
    country: "Việt Nam",
    producer: "Lý Hải Production",
    director: "Lý Hải",
    cast: "Lý Hải, Hứa Minh Đạt, Ốc Thanh Vân",
    description: "Phần tiếp theo đầy kịch tính của chuỗi phim Lật Mặt, với bí mật gia đình và những pha hành động mãn nhãn.",
    trailer: "https://www.youtube.com/embed/example4",
    genre: "Hành động, Gia đình",
    showtimes: ["09:30", "13:30", "17:30", "20:30"]
  },
  {
    id: "4",
    title: "Cuộc chiến không trọng lực",
    image: "images/image5.jpg",
    duration: 123,
    date: "2025-05-01",
    country: "Mỹ",
    producer: "Paramount Pictures",
    director: "Christopher Nolan",
    cast: "Matt Damon, Natalie Portman",
    description: "Khi loài người chạm tới giới hạn không gian, một cuộc chiến sống còn bùng nổ trong môi trường không trọng lực.",
    trailer: "https://www.youtube.com/embed/example5",
    genre: "Khoa học viễn tưởng, Hành động",
    showtimes: ["10:00", "14:00", "18:00"]
  },
  {
    id: "5",
    title: "Biệt Đội Sấm Sét",
    image: "images/image6.jpg",
    duration: 107,
    date: "2025-05-05",
    country: "Mỹ",
    producer: "Marvel Studios",
    director: "Taika Waititi",
    cast: "Chris Hemsworth, Tessa Thompson",
    description: "Biệt đội siêu anh hùng mới nổi chiến đấu chống lại thế lực hủy diệt từ vũ trụ khác.",
    trailer: "https://www.youtube.com/embed/example6",
    genre: "Siêu anh hùng, Phiêu lưu",
    showtimes: ["09:00", "12:30", "16:30", "20:00"]
  },
  {
    id: "6",
    title: "Tội Đồ",
    image: "images/image7.jpg",
    duration: 90,
    date: "2025-05-08",
    country: "Nhật Bản",
    producer: "Toho",
    director: "Hideo Nakata",
    cast: "Takuya Kimura, Erika Toda",
    description: "Một câu chuyện đen tối về sự trừng phạt và cứu rỗi trong một xã hội đầy bí ẩn.",
    trailer: "https://www.youtube.com/embed/example7",
    genre: "Tâm lý, Tội phạm",
    showtimes: ["10:00", "13:30", "17:00"]
  },
  {
    id: "7",
    title: "Rocco và Những Người Anh Em",
    image: "images/image8.jpg",
    duration: 135,
    date: "2025-04-30",
    country: "Ý",
    producer: "Cinecittà",
    director: "Luchino Visconti",
    cast: "Alain Delon, Renato Salvatori",
    description: "Tình thân, tình yêu và sự đấu tranh giữa các anh em trong bối cảnh nước Ý hậu chiến.",
    trailer: "https://www.youtube.com/embed/example8",
    genre: "Chính kịch, Xã hội",
    showtimes: ["11:00", "15:00", "19:00"]
  },
  {
    id: "8",
    title: "Yadang: Ba Mặt Lật Kèo",
    image: "images/image9.jpg",
    duration: 102,
    date: "2025-05-12",
    country: "Hàn Quốc",
    producer: "Showbox",
    director: "Bong Joon-ho",
    cast: "Song Kang-ho, Bae Doona",
    description: "Một vụ án ly kỳ đưa ra ánh sáng ba cuộc đời tưởng chừng không liên quan.",
    trailer: "https://www.youtube.com/embed/example9",
    genre: "Kinh dị, Tâm lý",
    showtimes: ["09:30", "13:00", "17:30"]
  },
  {
    id: "9",
    title: "Quái Thú Đại Náo Sở Thú",
    image: "images/image11.jpg",
    duration: 95,
    date: "2025-05-15",
    country: "Mỹ",
    producer: "Pixar",
    director: "Pete Docter",
    cast: "Tom Holland, Zendaya",
    description: "Khi các loài vật trong sở thú trở nên siêu trí tuệ, cuộc phiêu lưu hài hước bắt đầu.",
    trailer: "https://www.youtube.com/embed/example10",
    genre: "Hoạt hình, Phiêu lưu",
    showtimes: ["10:30", "14:30", "18:30"]
  },
  {
    id: "10",
    title: "Holy Night: Đội Săn Quỷ",
    image: "images/image11.jpg",
    duration: 100,
    date: "2025-05-20",
    country: "Hàn Quốc",
    producer: "Next Entertainment World",
    director: "Kim Yong-hwa",
    cast: "Ma Dong-seok, Park Bo-young",
    description: "Đêm giáng sinh không yên bình khi đội săn quỷ phát hiện ra một nghi lễ triệu hồi cổ xưa.",
    trailer: "https://www.youtube.com/embed/example11",
    genre: "Hành động, Kinh dị",
    showtimes: ["09:00", "12:30", "16:00", "19:30"]
  },
  {
    id: "11",
    title: "Shin Cậu Bé Bút Chì: Bí Ẩn! Học Viện Hoa Lệ Tenkasu",
    image: "images/image12.jpg",
    duration: 85,
    date: "2025-05-17",
    country: "Nhật Bản",
    producer: "TV Asahi",
    director: "Wataru Takahashi",
    cast: "Shinnosuke Nohara, Kazama",
    description: "Shin và nhóm bạn đối đầu với những thử thách lạ lùng trong một học viện bí ẩn.",
    trailer: "https://www.youtube.com/embed/example12",
    genre: "Hoạt hình, Hài hước",
    showtimes: ["10:00", "13:00", "16:00"]
  },
  {
    id: "12",
    title: "Địa Đạo: Mặt Trời Trong Bóng Tối",
    image: "images/image13.jpg",
    duration: 115,
    date: "2025-05-25",
    country: "Việt Nam",
    producer: "BHD",
    director: "Victor Vũ",
    cast: "Trấn Thành, Lan Ngọc",
    description: "Phim lấy cảm hứng từ những câu chuyện lịch sử trong hệ thống địa đạo thời chiến.",
    trailer: "https://www.youtube.com/embed/example13",
    genre: "Chiến tranh, Lịch sử",
    showtimes: ["09:30", "13:30", "17:30"]
  }
];

const cinemas = ["Rạp Galaxy", "Rạp BHD", "Rạp Lotte Cinema", "Rạp CGV"];
movies.forEach(movie => {
  const option = document.createElement("option");
  option.value = movie.id;
  option.textContent = movie.title;
  movieSelect.appendChild(option);
});

// Khi chọn phim thì load rạp
movieSelect.addEventListener("change", () => {
  const selectedMovieId = movieSelect.value;
  cinemaSelect.innerHTML = '<option value="">-- Chọn rạp --</option>';
  timeSelect.innerHTML = '<option value="">-- Chọn suất chiếu --</option>';
  cinemaSelect.disabled = false;
  timeSelect.disabled = true;

  if (selectedMovieId === "") {
    cinemaSelect.disabled = true;
    return;
  }

  cinemas.forEach(cinema => {
    const option = document.createElement("option");
    option.value = cinema;
    option.textContent = cinema;
    cinemaSelect.appendChild(option);
  });
});

// Khi chọn rạp thì load suất chiếu (tuỳ theo phim)
cinemaSelect.addEventListener("change", () => {
  const selectedMovieId = movieSelect.value;
  const selectedMovie = movies.find(movie => movie.id === selectedMovieId);

  timeSelect.innerHTML = '<option value="">-- Chọn suất chiếu --</option>';
  timeSelect.disabled = true;

  if (cinemaSelect.value === "" || !selectedMovie) return;

  selectedMovie.showtimes.forEach(time => {
    const option = document.createElement("option");
    option.value = time;
    option.textContent = time;
    timeSelect.appendChild(option);
  });

  timeSelect.disabled = false;
});