const JournalEntryService = require('../services/journalEntry.service');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const journalEntry = await JournalEntryService.getById(id);

    return journalEntry
      ? res.status(200).json(journalEntry)
      : res.status(404).json({ message: 'Journal entry not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

const create = async (req, res) => {
  try {
    const { mood, authorId, content } = req.body;
    const newJournalEntry = await JournalEntryService.create(
      mood,
      authorId,
      content,
    );

    return res.status(201).json(newJournalEntry);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

const update = async (req, res) => {
  try {
    const { mood, authorId, content } = req.body;
    const { id } = req.params;
    const updatedJournalEntry = await JournalEntryService.update(
      id,
      mood,
      authorId,
      content,
    );

    if (!updatedJournalEntry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }

    return res
      .status(200)
      .json({ message: 'Journal entry updated successfully!' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await JournalEntryService.remove(id);

    return res
      .status(200)
      .json({ message: 'Journal entry deleted successfully!' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = {
  getById,
  create,
  update,
  remove,
};
