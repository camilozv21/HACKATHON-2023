const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path')
const controller = require("../controllers/analysisController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './server/database/data'); // Directorio donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
      cb(null, 'record' + Date.now() + path.extname(file.originalname).toLowerCase());
    },
  });
  
  const upload = multer({ storage });

// @POST - /api/process
router.post("/api/process", upload.single('file'), controller.processForm);

// @GET - /api/analyst/:id
router.get("/api/analyst/:id", controller.getAnalysisById);

module.exports = router
