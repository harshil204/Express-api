const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  register,
  login,
  userInfo,
  updateProfile,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "profile_img/");
  },
  filename: function (req, file, cb) {
    console.log("console from multer function ==> ", req?.params?.id);
    cb(null, req?.params?.id + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", validateToken, userInfo);
router.post("/register", register);
router.post("/login", login);

router.put("/profile/:id", upload.single("profile_img"), updateProfile);

module.exports = router;
