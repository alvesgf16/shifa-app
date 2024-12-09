const UserService = require('../services/user.service');
const JournalEntryService = require('../services/journalEntry.service');

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (req.query.includeJournalEntries === 'true') {
      const journalEntries = await JournalEntryService.getAllByAuthorId(id);
      return res.status(200).json({ user, journalEntries });
    }

    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

const create = async (req, res) => {
  try {
    const {
      // role,
      username,
      // password,
      firstName,
      // middleName,
      lastName,
      // address,
      email,
      // phoneNumber,
      // dateOfBirth,
      // daysSober,
    } = req.body;
    const newUser = await UserService.create(
      // role,
      username,
      // password,
      firstName,
      // middleName,
      lastName,
      // address,
      email,
      // phoneNumber,
      // dateOfBirth,
      // daysSober,
    );

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message });
  }
};

const update = async (req, res) => {
  try {
    const {
      // role,
      username,
      // password,
      firstName,
      // middleName,
      lastName,
      // address,
      email,
      // phoneNumber,
      // dateOfBirth,
      // daysSober,
    } = req.body;
    const { id } = req.params;
    const updatedUser = await UserService.update(
      id,
      // role,
      username,
      // password,
      firstName,
      // middleName,
      lastName,
      // address,
      email,
      // phoneNumber,
      // dateOfBirth,
      // daysSober,
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User updated successfully!' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await UserService.remove(id);

    return res.status(200).json({ message: 'User deleted successfully!' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
