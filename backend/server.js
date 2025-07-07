require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contact");

const app = express();

// ✅ Apply CORS before everything
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// ✅ Parse incoming JSON
app.use(express.json());


app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// ✅ Use contact routes
app.use("/api", contactRoutes);

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Start server
const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`🚀 Server running at :${PORT}`));
