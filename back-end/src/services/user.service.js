const { User } = require('../models');

const getAll = async () => User.findAll();

const getById = async (id) => User.findOne({ where: { id } });

const findByEmailAndPassword = async (email, password) => (
  User.findOne({ where: { email, password } })
);

const findByEmail = async (email) => User.findOne({ where: { email } });

const create = async (
  password,
  email,
) => User.create({
  password,
  email,
});

const update = async (
  id,
  password,
  email,
) => {
  const [updatedUser] = await User.update(
    {
      password,
      email,
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
  findByEmailAndPassword,
  findByEmail,
};
