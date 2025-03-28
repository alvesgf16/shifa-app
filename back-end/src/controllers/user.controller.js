const UserService = require('../services/user.service');
const JournalEntryService = require('../services/journalEntry.service');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Login attempt: ${email}`);
    const user = await UserService.findByEmailAndPassword(email, password);
    if (!user) {
      console.log('Invalid email or password');
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    console.log('Login successful:', user);
    return res.status(200).json({ message: 'Login successful', user });
  } catch (e) {
    console.log('Error during login:', e.message);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

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
    const { password, email } = req.body;

    const existingEmail = await UserService.findByEmail(email);

    if (existingEmail !== null) {
      return res.status(409).json({ message: 'User already exists.' });
    }

    const newUser = await UserService.create(password, email);

    return res
      .status(201)
      .json({ message: 'User created successfully', data: newUser });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message });
  }
};

const update = async (req, res) => {
  try {
    const { password, email } = req.body;
    const { id } = req.params;
    const updatedUser = await UserService.update(id, password, email);

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
    const deletedUser = await UserService.remove(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

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
  login,
};
