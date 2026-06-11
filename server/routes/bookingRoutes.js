const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");


// CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);

    const savedBooking = await booking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// GET BOOKINGS
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;