const express = require('express');
const router = express.Router();
const sharp = require('sharp');

// const ffmpeg = require("fluent-ffmpeg");

// const thumbnail= (req, res, next) =>{
//   console.log("thumbnail file", req.file)
//   ffmpeg("./uploads")
//   .screenshots({
//     timestamps: ['10%'], // Capture a thumbnail at 10% of the video duration
//     folder: "./thumbnail",
//     filename: req.file.filename.replace('.mp4', '.png'),
//     size: '320x240', // Adjust the size as needed
//   })
//   .on('end', () => {
//     console.log(`Thumbnail created for ${req.file.filename}`);
//   })
//   .on('error', (err) => {
//     console.error(`Error generating thumbnail for ${req.file.filename}: ${err}`);
//   });
//   next()
// } 

// const thumbnail =(req, res, next)=> {
//   console.log(req.file, "req.file sharp")
//   sharp(req.file.destination).resize(200, 200).toFile('uploads/' + 'thumbnails-' + req.file.originalname, (err, resizeImage) => {
//     if (err) {
//          console.log(err);
//     } else {
//          console.log(resizeImage);
//     }
// }); 
// next();
// }
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

router.route("/").post(upload.single('video'), summaryController.addNewSummary)
router.route("/:id").get(summaryController.getSummary)
router.route("/:id/:summary_id").delete(summaryController.deleteSummary);

module.exports = router;




