const express = require("express");
const router = express.Router();

const Photo = require("../models/Photo");

const upload = require("../middleware/upload");

const cloudinary = require("../config/cloudinary");


// GET ALL PHOTOS
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find().sort({
      createdAt: -1,
    });

    res.json(photos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// UPLOAD PHOTO
router.post("/", upload.single("image"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);

  try {

    const result = await cloudinary.uploader.upload(
      req.file.path
    );

    const newPhoto = new Photo({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      imageUrl: result.secure_url,
    });

    const savedPhoto = await newPhoto.save();

    res.status(201).json(savedPhoto);

  }catch (error) {

  console.log(error);

  res.status(500).json({
    message: error.message,
  });
}
}); 

// UPDATE PHOTO
router.put("/:id", async (req, res) => {
  try {

    const updatedPhoto = await Photo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
      },
      {
        new: true,
      }
    );

    res.json(updatedPhoto);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

router.delete("/:id", async (req, res) => {
  try {

    console.log("DELETE REQUEST:", req.params.id);

    const deletedPhoto =
      await Photo.findByIdAndDelete(req.params.id);

    console.log("DELETED:", deletedPhoto);

    res.json({
      success: true,
      deletedPhoto,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
});

module.exports = router;