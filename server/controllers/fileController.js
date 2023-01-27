import File from "../models/fileModel.js";

export const getAllFiles = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const files = await File.find({ author: userId }).select("-filePath");
    res.status(200).json(files);
  } catch (err) {
    next(err);
  }
};

export const uploadFile = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const fileName = req.file.originalname;
    const filePath = req.file.filename;
    const file = new File({
      author: userId,
      fileName,
      filePath,
    });
    file.filePath = undefined;
    await file.save();
    res.status(201).json({ message: "File upload success", file });
  } catch (err) {
    next(err);
  }
};

export const downloadFile = async (req, res, next) => {
  try {
    const fileId = req.params.id;
    const { userId } = req.user;
    const file = await File.findById(fileId);
    if (!file) {
      res.status(404);
      throw new Error("file not found");
    }
    if (userId !== file.author.toString()) {
      res.status(401);
      throw new Error("your not authorized");
    }
    const path = file.filePath;
    res.download(`/file/${path}`);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
