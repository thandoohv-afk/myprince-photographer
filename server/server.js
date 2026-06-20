const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const authRoutes = require("./routes/authRoutes");
const photoRoutes = require("./routes/photoRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-frontend-domain.vercel.app"
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Photography API Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));