const express = require('express');
const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const upload = multer({ storage: storage });

const summaryController = require("../controllers/summaryController");

router.route("/").post(upload.single('video'), summaryController.addNewSummary);

module.exports = router;




