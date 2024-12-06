const { User } = require('../models');

const getAll = async () => User.findAll();

const getById = async (id) => User.findOne({ where: { id } });

const create = async (
  role,
  username,
  password,
  firstName,
  middleName,
  lastName,
  address,
  email,
  phoneNumber,
  dateOfBirth,
  daysSober,
) => User.create({
  role,
  username,
  password,
  firstName,
  middleName,
  lastName,
  address,
  email,
  phoneNumber,
  dateOfBirth,
  daysSober,
});

const update = async (
  id,
  role,
  username,
  password,
  firstName,
  middleName,
  lastName,
  address,
  email,
  phoneNumber,
  dateOfBirth,
  daysSober,
) => {
  const [updatedUser] = await User.update(
    {
      role,
      username,
      password,
      firstName,
      middleName,
      lastName,
      address,
      email,
      phoneNumber,
      dateOfBirth,
      daysSober,
    },
    { where: { id } },
  );

  return updatedUser;
};

const remove = async (id) => User.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
