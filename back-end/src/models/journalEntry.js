module.exports = (sequelize, DataTypes) => {
  const JournalEntry = sequelize.define('User', {
    mood: DataTypes.STRING,
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
  });

  JournalEntry.associate = (models) => {
    JournalEntry.belongsTo(models.User, {
      foreignKey: 'authorId',
      as: 'journalEntries',
    });
  };

  return JournalEntry;
};
