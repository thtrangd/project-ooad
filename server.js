const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Route test để kiểm tra server còn chạy không
app.get('/test', (req, res) => {
  console.log('Route /test được gọi');
  res.send('Route test OK');
});

// Phục vụ file signup.html khi truy cập /
app.get('/', (req, res) => {
  console.log('Route / được gọi');
  const filePath = path.join(__dirname, 'signup.html');
  res.sendFile(filePath, err => {
    if (err) {
      console.error('Lỗi gửi file signup.html:', err);
      if (!res.headersSent) {
        res.status(500).send('Lỗi server khi gửi file');
      }
    } else {
      console.log('Gửi file signup.html thành công');
    }
  });
});

// Kết nối DB SQLite
const db = new sqlite3.Database('users.db', err => {
  if (err) {
    console.error('Lỗi kết nối DB:', err.message);
    process.exit(1);
  }
  console.log('✅ Đã kết nối DB SQLite.');
});

// Tạo bảng users nếu chưa tồn tại
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullname TEXT,
  email TEXT UNIQUE,
  phone TEXT,
  gender TEXT,
  birthday TEXT,
  password TEXT
)`, err => {
  if (err) {
    console.error('Lỗi tạo bảng:', err.message);
    process.exit(1);
  }
  console.log('✅ Bảng users đã sẵn sàng.');
});

// Xử lý POST đăng ký
app.post('/register', async (req, res) => {
  try {
    const { fullname, email, phone, gender, birthday, password } = req.body;

    if (!fullname || !email || !phone || !gender || !birthday || !password) {
      return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin.' });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO users (fullname, email, phone, gender, birthday, password) VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(sql, [fullname, email, phone, gender, birthday, hashedPassword], function(err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(409).json({ error: 'Email đã được sử dụng.' });
            }
            console.error('Lỗi khi chèn dữ liệu:', err.message);
            return res.status(500).json({ error: 'Đăng ký thất bại. Vui lòng thử lại sau.' });
        }

        console.log(`✅ Người dùng ${fullname} đã được thêm vào database.`);
        res.status(200).json({ message: 'Đăng ký thành công!' });
        });
    } catch (error) {
        console.error('Lỗi xử lý đăng ký:', error);
        res.status(500).json({ error: 'Lỗi server.' });
    }
    });


// Server lắng nghe
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
  console.log('Server running in:', __dirname);
});
