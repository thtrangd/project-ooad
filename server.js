const express = require('express');
const Database = require('better-sqlite3');
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
let db;
try {
  db = new Database('users.db', { verbose: console.log });
  console.log('✅ Đã kết nối DB SQLite.');
} catch (err) {
  console.error('Lỗi kết nối DB:', err.message);
  process.exit(1);
}

// Tạo bảng users nếu chưa tồn tại
try {
  db.prepare(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullname TEXT,
    email TEXT UNIQUE,
    phone TEXT,
    gender TEXT,
    birthday TEXT,
    password TEXT
  )`).run();
  console.log('✅ Bảng users đã sẵn sàng.');
} catch (err) {
  console.error('Lỗi tạo bảng:', err.message);
  process.exit(1);
}

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

    try {
      db.prepare(sql).run(fullname, email, phone, gender, birthday, hashedPassword);
      console.log(`✅ Người dùng ${fullname} đã được thêm vào database.`);
      res.status(200).json({ message: 'Đăng ký thành công!' });
    } catch (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(409).json({ error: 'Email đã được sử dụng.' });
      }
      console.error('Lỗi khi chèn dữ liệu:', err.message);
      return res.status(500).json({ error: 'Đăng ký thất bại. Vui lòng thử lại sau.' });
    }

  } catch (error) {
    console.error('Lỗi xử lý đăng ký:', error);
    res.status(500).json({ error: 'Lỗi server.' });
  }
});

// Xử lý đăng nhập
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Vui lòng nhập email và mật khẩu.' });
  }

  try {
    const user = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
    if (!user) {
      return res.status(401).json({ error: 'Email không tồn tại.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Mật khẩu không đúng.' });
    }

    // Nếu đăng nhập thành công:
    console.log(`✅ Đăng nhập thành công cho email ${email}`);
    res.status(200).json({ message: 'Đăng nhập thành công!' });

  } catch (err) {
    console.error('Lỗi đăng nhập:', err.message);
    res.status(500).json({ error: 'Lỗi server khi đăng nhập.' });
  }
});

app.use(express.static(__dirname));

// Server lắng nghe
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
  console.log('Server running in:', __dirname);
});
