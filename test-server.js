const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  console.log('Route /test được gọi');
  res.send('Route test OK');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
