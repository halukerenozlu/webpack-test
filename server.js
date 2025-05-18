// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Public klasörünü statik dosyalar için tanımla
app.use(express.static(path.join(__dirname, "public")));

// Ana sayfa isteğinde index.html'i gönder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
