import multer from "multer";

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/files");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

export const multerFile = multer({ storage: fileStorage });
