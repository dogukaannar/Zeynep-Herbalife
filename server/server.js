const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ürün verisi (isim, fiyat ve resim)
const data = [
  { id: 1, name: "Bitki Çayı", price: "50₺", image: "https://via.placeholder.com/150?text=Bitki+Çayı" },
  { id: 2, name: "Vitamin D", price: "75₺", image: "https://via.placeholder.com/150?text=Vitamin+D" },
  { id: 3, name: "Protein Tozu", price: "120₺", image: "https://via.placeholder.com/150?text=Protein+Tozu" }
];

// API endpoint
app.get("/api/products", (req, res) => {
  res.json(data);
});

// Test endpoint
app.get("/", (req, res) => {
  res.send("Server çalışıyor 🚀");
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} üzerinde çalışıyor`);
});
