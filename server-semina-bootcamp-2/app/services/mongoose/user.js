const Users = require('../../api/v1/users/model');
const Organizers = require('../../api/v1/organizers/model');
const { BadRequestError } = require('../../errors');

const createOrganizer = async (req) => {
  const { organizer, email, password, confirmPassword, name } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan confirmation password tidak cocok');
  }
  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    email,
    name,
    passsword,
    organizer: result.organizer,
    role,
  });
  delete users._doc.passsword;

  return users;
};

module.exports = { createOrganizer };
