const { JournalEntry } = require('../models');

const getAllByAuthorId = async (authorId) => JournalEntry.findAll({
  where: { authorId },
  attributes: { exclude: ['authorId'] },
});

const getById = async (id) => JournalEntry.findOne({ where: { id } });

const create = async (mood, title, authorId, content) => JournalEntry.create({
  mood,
  title,
  authorId,
  content,
});

const update = async (id, mood, title, authorId, content) => {
  const [updatedJournalEntry] = await JournalEntry.update(
    {
      mood,
      title,
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
