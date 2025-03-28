const { JournalEntry } = require('../models');

const getAllByAuthorId = async (authorId) => JournalEntry.findAll({
  where: { authorId },
  attributes: { exclude: ['authorId'] },
});

const getById = async (id) => JournalEntry.findOne({ where: { id } });

const create = async (mood, authorId, content) => JournalEntry.create({
  mood,
  authorId,
  content,
});

const update = async (id, mood, authorId, content) => {
  const [updatedJournalEntry] = await JournalEntry.update(
    {
      mood,
      authorId,
      content,
    },
    { where: { id } },
  );

  return updatedJournalEntry;
};

const remove = async (id) => JournalEntry.destroy({ where: { id } });

module.exports = {
  getAllByAuthorId,
  getById,
  create,
  update,
  remove,
};
