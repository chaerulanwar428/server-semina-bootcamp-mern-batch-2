const Images = require('../../api/v1/images/model');

// 1. kita gunakan cara init
// 2. generate url setalah submit baru kita simpan

//2. generate url setelah submit baru kita simpen images

const generatedUrlImage = async (req) => {
  const result = `uploads/${req.file.filename}`;

  return result;
};

const createImages = async (req) => {
  const result = await Images.create({
    name: req.file ? `uploads/${req.file.filename}` : 'uploads/avatar/default.jpeg',
  });

  return result;
};

module.exports = { createImages };
